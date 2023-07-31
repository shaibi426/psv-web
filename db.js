const sql = require('mssql')



const config = {
    user: "PSV_dev",
    password:"14554fg%dd",
    server: "cpo.nhmp.gov.pk",
    database: "M3DB",
    port: 4414,
    options: {
        trustedconnection: true,
        trustServerCertificate: true
    },
}
async function connectDB(){
    try {
        await sql.connect(config)
        console.log('connected to SQL')
    } catch (error) {
        console.log(error)
    }
}

connectDB()

module.exports =sql