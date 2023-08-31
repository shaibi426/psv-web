import db from '../../../db'

export default async function handler(req, res) {
  const {login} = req.query
    if (req.method === 'GET') {
      const result = await db.query(`select UserName,UserPassword from COMMON_USER where UserName ='${login[0]}'`)
      res.status(200).json(result.recordset)
      
    } 
  }