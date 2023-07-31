import db from '../../db'

export default async function handler(req, res) {
    if (req.method === 'GET') {
      const result = await db.query("SELECT count(iIF(GETDATE() > RouteExpiryDate, 'Expired', 'Valid')) as total, iIF(GETDATE() > RouteExpiryDate, 'Expired', 'Valid') as Validity FROM VehicleInfo WHERE RouteExpiryDate IS NOT NULL GROUP BY iIF(GETDATE() > RouteExpiryDate, 'Expired', 'Valid') ")
      res.status(200).json(result.recordset)
      res.status(200).json({ message: 'This is a GET request. for route checking' });
    } 
  }


  