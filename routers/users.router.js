const express = require('express');
const routerUser = express.Router();

const usersController = require('../controllers/users.controller')


routerUser.get("", usersController.getAll)
routerUser.get("/:id", usersController.getOne)
routerUser.post("", usersController.addUser)
routerUser.patch("/:id", usersController.updateUser)
routerUser.delete("/:id", usersController.deleteUser)




module.exports = routerUser