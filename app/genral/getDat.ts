const sql = require('mssql')

const mydata = {'name':'training collage',value:12332123}

const config = {
    user: "PSV_dev",
    password:"14554fg%dd",
    server: "cpo.nhmp.gov.pk,4414",
    database: "M3DB",
    port: 4414,
    options: {
        trustedconnection: true,
        trustServerCertificate: true
    },
}

export default async function ExcuteQuery(query:String) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query(query);
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


