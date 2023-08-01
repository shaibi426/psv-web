import db from '../../db'

export default async function checkFitness(req, res) {
    if (req.method === 'GET') {
      const result = await db.query("select COUNT(RegNo) as PSVs,KM as Location from SearchData WHERE AddedOn > GETDATE()-90 and KM <2000 group by KM ")
      res.status(200).json(result.recordset)
      res.status(200).json({ message: 'This is a GET request. for Fitness checking' });
    } 
  }