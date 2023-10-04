const express = require('express');
const routerUser = express.Router();

const {usersController, uploadMiddleware} = require('../controllers/users.controller')


routerUser.get("", usersController.getAll)
routerUser.get("/:id", usersController.getOne)
routerUser.post("/register", uploadMiddleware, usersController.addUser)
routerUser.patch("/:id", usersController.updateUser)
routerUser.delete("/:id", usersController.deleteUser)




module.exports = routerUser