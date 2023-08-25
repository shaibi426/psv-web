import db from '../../../../db'


export default async function compReport(req, res) {
  if (req.method === 'GET') {
    const {compReport} = req.query
    
    const qry=`SELECT CONCAT_WS(' ',VehicleInfo.PrefixRegNo,VehicleInfo.RegNo)as PsvNo, VehicleInfo.VehicleModel, VehicleInfo.VehicleType, VehicleInfo.ChasisNo, VehicleInfo.EngineNo, VehicleInfo.VehicleMake, VehicleInfo.VehicelColor, VehicleInfo.ACStatus,VehicleInfo.CompName,  VehicleInfo.TrackerStatus, VehicleInfo.RoutePermitNo, VehicleInfo.IssueAuthority, VehicleInfo.RouteExpiryDate,  VehicleInfo.RouteFrom, VehicleInfo.RouteTo, VehicleInfo.RouteVia, VehicleInfo.FitnessCertNo, VehicleInfo.FitnessExpiryDate, VehicleInfo.FitnessIssueAuth, VehicleInfo.TypeExpiryDate, VehicleInfo.FogLights, VehicleInfo.HazardLights, VehicleInfo.BackLigths, VehicleInfo.HeadLights, VehicleInfo.RegPlates, VehicleInfo.FirstAidBox FROM VehicleInfo INNER JOIN COMMON_USER ON VehicleInfo.AddedBY = COMMON_USER.UserName where VehicleInfo.AddedON >${compReport[0]} and VehicleInfo.AddedON < ${compReport[1]}`
    const result = await db.query(qry)
   
    res.status(200).json(result.recordset)
  } 
   
  }

  //   /api/vehicleReports/compReport/firstdate/2nddate