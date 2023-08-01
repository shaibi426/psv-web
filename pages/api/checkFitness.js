import db from '../../db'

export default async function checkFitness(req, res) {
    if (req.method === 'GET') {
      const result = await db.query("SELECT count(iIF(GETDATE()>FitnessExpiryDate,'Expired Fitness','Valid Fitness')) as total, iIF(GETDATE()>FitnessExpiryDate,'Expired Fitness','Valid Fitness') as validity FROM VehicleInfo WHERE FitnessExpiryDate IS NOT NULL GROUP BY iIF(GETDATE()>FitnessExpiryDate,'Expired Fitness','Valid Fitness')")
      res.status(200).json(result.recordset)
      res.status(200).json({ message: 'This is a GET request. for Fitness checking' });
    } 
  }