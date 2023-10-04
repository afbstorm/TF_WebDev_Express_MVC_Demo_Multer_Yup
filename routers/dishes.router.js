const express = require('express');
const routerDishes = express.Router();

const dishesController = require('../controllers/dishes.controller')


routerDishes.get("", dishesController.getAll)




module.exports = routerDishes