import db from '../../db'

export default async function handler(req, res) {
    if (req.method === 'GET') {
      const result = await db.query("select DISTINCT DriverName,Company,CellNo from DriverInfo where AddedON >GETDATE()-60")
      res.status(200).json(result.recordset)
      res.status(200).json({ message: 'This is a GET request. for route checking' });
    } 
  }