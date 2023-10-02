const dbConnection = require('./db')
const mssql = require('mssql')

const usersModel = {
    getAll : async () => {
        const db = await dbConnection.getDbConnection()
        let result = await db.query('SELECT * FROM Users')
        db.close()
        return result.recordset
    },

    getOne : async () => {
        const db = await dbConnection.getDbConnection()
    },

    addUser : async () => {
        const db = await dbConnection.getDbConnection()
    },

    updateUser : async () => {
        const db = await dbConnection.getDbConnection()
    },

    deleteUser : async () => {
        const db = await dbConnection.getDbConnection()
    }
}

module.exports = usersModel