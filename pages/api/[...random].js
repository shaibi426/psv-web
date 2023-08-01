import db from '../../db'

export default async function getTotalRecord(req, res) {
    if (req.method === 'GET') {
      const {random} = req.query
       const result = await db.query(`select count(${random[0]}) from ${random[1]}`)
       res.status(200).json(result.recordset)
      res.status(200).json({ message: `This is a GET request for getting total number of record in a table ${random[1]}`});
    } 
  }