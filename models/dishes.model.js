const dbConnection = require('./db')
const mssql = require('mssql')

const dishesModel = {
    getAll : async () => {
        const db = await dbConnection.getDbConnection()
        let result = await db.query('SELECT * FROM Dishes')
        db.close()
        return result.recordset
    },
}

module.exports = dishesModel