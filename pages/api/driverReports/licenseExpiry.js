import db from '../../../db'



export default async function licenseExpiryReport(req, res) {
  if (req.method === 'GET') {
  
    const qry=`select distinct DriverName,CNIC,Address,CellNo,LicenseNo,CAST(LicenseExpiry AS date) as LicenseExpiry,Company from DriverInfo where LicenseExpiry <GETDATE()`
 
    const result = await db.query(qry)
   
    res.status(200).json(result.recordset)
  } 
   
  }

//  /api/driverReports/licenseExpiry