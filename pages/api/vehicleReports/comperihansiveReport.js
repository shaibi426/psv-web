import db from '../../../db'


export default async function handler(req, res) {
    
    if (req.method === 'GET') {
        const qry=
    const result = await db.query(qry)
      res.status(200).json(result.recordset)
      res.status(200).json({ message: 'This is a GET request. for licience checking' });
    } 
  }
