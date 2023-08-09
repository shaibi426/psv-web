import db from '../../../db'



export default async function psvTrevelled(req, res) {
    if (req.method === 'GET') {
      const {random} = req.query
       const result = await db.query(`select Distinct cast(cast(b.AddedON as time) as varchar(5)) [Time] ,a.RouteExpiryDate,a.FitnessExpiryDate,a.TypeExpiryDate,b.KM,b.Side, c.DriverName, d.UserSign,d.FullName,d.Sector from  VehicleInfo as a  inner join  SearchData as b on a.RegNo = b.RegNo inner join DriverInfo as c on b.CNIC = c.CNIC inner join COMMON_USER as d on b.AddedBy= d.UserName where   b.AddedON >${psvTrevelled[0]} and b.AddedON <${psvTrevelled[1]} and b.RegNo =${psvTrevelled[2]}`)
       res.status(200).json(result.recordset)
      res.status(200).json({ message: `This is a GET request for getting total number of record in a table ${random[1]}`});
    } 
  }