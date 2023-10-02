const usersModel = require("../models/users.model")

const usersController = {

    getAll : async (req, res) => {

        let allUsers = await usersModel.getAll()
        res.render("index.ejs", { page : "pages/users/getAll.ejs", allUsers : allUsers})

    },

    getOne : (req, res) => {

    },

    addUser : (req, res) => {

    },

    updateUser : (req, res) => {

    },


    deleteUser : (req, res) => {

    }
}


module.exports = usersController