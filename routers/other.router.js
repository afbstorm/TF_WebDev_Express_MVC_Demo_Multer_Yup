const express = require('express');
const routerOther = express.Router();
const otherController = require("../controllers/others.controller")


routerOther.get("/", (req, res) => {})
routerOther.get("/contact", otherController.getContactPage)
routerOther.post("/contact", otherController.postContactPage)



module.exports = routerOther