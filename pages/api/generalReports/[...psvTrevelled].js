import db from '../../../db'



export default async function psvsTrevelled(req, res) {
  if (req.method === 'GET') {
    const {psvTrevelled} = req.query
    // const qry=`select Distinct d.Sector ,b.KM,b.Side, cast(cast(b.AddedON as time) as varchar(5)) [Time],c.DriverName ,a.RouteExpiryDate,a.FitnessExpiryDate,a.TypeExpiryDate, d.FullName from  VehicleInfo as a  inner join  SearchData as b on a.RegNo = b.RegNo inner join DriverInfo as c on b.CNIC = c.CNIC inner join COMMON_USER as d on b.AddedBy= d.UserName where   b.AddedON >${psvTrevelled[0]} and b.AddedON <${psvTrevelled[1]}  and b.RegNo = ${psvTrevelled[2]}`
    const qry=`select Distinct d.Sector ,b.KM,b.Side, cast(cast(b.AddedON as time) as varchar(5)) [Time],c.DriverName ,a.RouteExpiryDate,a.FitnessExpiryDate,a.TypeExpiryDate, d.FullName from  VehicleInfo as a  inner join  SearchData as b on a.RegNo = b.RegNo inner join DriverInfo as c on b.CNIC = c.CNIC inner join COMMON_USER as d on b.AddedBy= d.UserName where   b.AddedON >${psvTrevelled[0]} and b.AddedON <${psvTrevelled[1]} and cast(b.AddedON as time)>${psvTrevelled[2]}and cast(b.AddedON as time)<${psvTrevelled[3]}  and b.RegNo = ${psvTrevelled[4]}`
    
    const result = await db.query(qry)
   
    res.status(200).json(result.recordset)
  } 
   
  }


