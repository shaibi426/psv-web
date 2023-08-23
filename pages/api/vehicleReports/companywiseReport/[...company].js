import db from '../../../../db'



export default async function companyWisereport(req, res) {
  if (req.method === 'GET') {
    const {company} = req.query
    
    const qry=`select distinct CompName,CONCAT_WS(' ',PrefixRegNo,RegNo) as PsvNo,VehicleModel,VehicleType,FitnessExpiryDate,RouteExpiryDate  from VehicleInfo where CompName =${company[0]}  order by CompName`
    const result = await db.query(qry)
   
    res.status(200).json(result.recordset)
  } 
   
  }

 