import db from '../../../db'
const Today = new Date(Date()).toLocaleDateString().split("/").reverse().join("-")

export default async function handler(req, res) {
    
    if (req.method === 'GET') {
        const qry=`select CompName,RegNo,ChasisNo,EngineNo,VehicleMake,ManufactureYear from VehicleInfo where RouteExpiryDate >'${Today}' and FitnessCertNo >'${Today}' and TypeExpiryDate>'${Today}'ORDER BY CompName `
    const result = await db.query(qry)
      res.status(200).json(result.recordset)
      res.status(200).json({ message: 'This is a GET request. for licience checking' });
    } 
  }
