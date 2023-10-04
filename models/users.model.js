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

    addUser : async (userData) => {
        try {
            const db = await dbConnection.getDbConnection()
            const sqlQuery = new mssql.PreparedStatement(db);
            sqlQuery.input('email', mssql.NVarChar, userData.email)
            sqlQuery.input('pseudo', mssql.NVarChar, userData.pseudo)
            sqlQuery.input('password', mssql.NVarChar, userData.password)
            sqlQuery.input('imagePath', mssql.NVarChar, userData.imagePath)
            await sqlQuery.prepare('INSERT INTO Users (pseudo, email, hashpassword, imagePath) VALUES (@pseudo, @email, @password, @imagePath)')
            await sqlQuery.execute(userData);
            db.close();
        } catch (error) {
            console.error(error)
        }
    },

    updateUser : async () => {
        const db = await dbConnection.getDbConnection()
    },

    deleteUser : async () => {
        const db = await dbConnection.getDbConnection()
    }
}

module.exports = usersModel