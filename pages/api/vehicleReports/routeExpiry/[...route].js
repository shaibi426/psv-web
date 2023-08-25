import db from '../../../../db'



export default async function routeExpiryReport(req, res) {
  if (req.method === 'GET') {
    const {route} = req.query
    
    const qry=`select Distinct VehicleInfo.CompName, CONCAT_WS(' ',VehicleInfo.PrefixRegNo,VehicleInfo.RegNo)as PsvNo,VehicleInfo.VehicleModel,ACStatus,VehicelColor from VehicleInfo inner join FinalReport on VehicleInfo.RegNo = FinalReport.RegNo where  VehicleInfo.AddedON >${route[0]} and VehicleInfo.AddedON <${route[1]}and FinalReport.RouteExpired =1`
 
    const result = await db.query(qry)
   
    res.status(200).json(result.recordset)
  } 
   
  }

  //path     /api/vehicleReports/routeExpiry/date1/date2