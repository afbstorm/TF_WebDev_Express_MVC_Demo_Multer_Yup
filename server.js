//import des différentes lib
require("dotenv").config()

const testDb = require("./models/db")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

//management de la base de données
testDb.testDbConnection()


//Middlewares d'entrées
app.set("view engine", "ejs")
app.set("views", "./views")

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


//Routage
const routerBase = require("./routers/base.router")
app.use("", routerBase)


//Gestion des 404
app.all("*", (req, res) => {
    res.status(404).send("Not Found")
})

//Autre error global
app.use((error, req, res, next) => {
    console.log("Error URL : ", req.url)
    console.log("Error Message : ", error.message)
    res.status(500)
    res.send("Internal Server Error")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})