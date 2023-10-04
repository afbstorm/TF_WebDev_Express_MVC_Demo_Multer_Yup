const dishesModel = require("../models/dishes.model")

const dishesController = {

    getAll : async (req, res) => {

        let allDishes = await dishesModel.getAll()
        res.render("index.ejs", { page : "pages/dishes/dishes.ejs", allDishes : allDishes})

    },
}


module.exports = dishesController