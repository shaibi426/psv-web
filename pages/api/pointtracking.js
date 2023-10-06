import db from '../../db'

export default async function checkFitness(req, res) {
    if (req.method === 'GET') {
      const result = await db.query("select COUNT(psvNo) as PSVs,chkPoint as Location from inspectionReport WHERE addedDate > GETDATE()-30  group by chkPoint ")
      res.status(200).json(result.recordset)
      res.status(200).json({ message: 'This is a GET request. for Fitness checking' });
    } 
  }