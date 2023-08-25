import db from '../../../../db'



export default async function fitnessExpiryReport(req, res) {
  if (req.method === 'GET') {
    const {fitness} = req.query
    
    const qry=`select Distinct VehicleInfo.CompName, CONCAT_WS(' ',VehicleInfo.PrefixRegNo,VehicleInfo.RegNo)as PsvNo,VehicleInfo.VehicleModel,VehicleInfo.CompName,ACStatus,VehicelColor from VehicleInfo inner join FinalReport on VehicleInfo.RegNo = FinalReport.RegNo where  VehicleInfo.AddedON >${fitness[0]} and VehicleInfo.AddedON <${fitness[1]}and FinalReport.FittnessExired =1`
 
    const result = await db.query(qry)
   
    res.status(200).json(result.recordset)
  } 
   
  }
  // pages\api\vehicleReports\fitnessExpiry\[...fitness].js