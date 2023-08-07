import { report } from 'process'
import db from '../../../db'

export default async function getDatewiseReport(req, res) {
    if (req.method === 'GET') {
      const {Reports} = req.query
      const qry=` select DISTINCT ${Reports[0]} from ${Reports[1]} where ${Reports[2]}> ${Reports[3]} and ${Reports[2]}< ${Reports[4]}`
      const result = await db.query(qry)
      console.log(result.recordset)
          res.status(200).json(result.recordset)
    } 
  }
