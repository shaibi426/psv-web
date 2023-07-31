import db from '../../db'



export default async function handler(req, res) {
    if (req.method === 'GET') {
      // await sql.connect(config)
      // console.log('connected to SQL')
      const result = await db.query("SELECT count(iIF(GETDATE()>LicenseExpiry,'Expired Licence','Valid Licence')) as total, iIF(GETDATE()>LicenseExpiry,'Expired Licence','Valid Licence') as validity FROM DriverInfo where LicenseExpiry is not null GROUP BY iIF(GETDATE()>LicenseExpiry,'Expired Licence','Valid Licence')")
      res.status(200).json(result.recordset)



      res.status(200).json({ message: 'This is a GET request. for licience checking' });
    } 
  }