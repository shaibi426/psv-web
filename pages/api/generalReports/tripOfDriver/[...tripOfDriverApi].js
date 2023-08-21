import db from '../../../../db'



export default async function tripOfDrivers(req, res) {
  if (req.method === 'GET') {
    const {tripOfDriverApi} = req.query
    
    const qry=`select Distinct d.Sector,b.KM,b.Side,b.AddedON, cast(cast(b.AddedON as time) as varchar(5)) [Time],b.RegNo,c.DriverName ,b.DriverLicenceNo,b.LicenseExpiry, d.FullName from  SearchData as b  inner join  DriverInfo as c on b.CNIC = c.CNIC  inner join COMMON_USER d on b.AddedBy = d.UserName where   b.AddedON >${tripOfDriverApi[0]} and b.AddedON <${tripOfDriverApi[1]} and cast(b.AddedON as time)>${tripOfDriverApi[2]}and cast(b.AddedON as time)<${tripOfDriverApi[3]} and b.CNIC = ${tripOfDriverApi[4]}`
    const result = await db.query(qry)
   
    res.status(200).json(result.recordset)
  } 
   
  }

