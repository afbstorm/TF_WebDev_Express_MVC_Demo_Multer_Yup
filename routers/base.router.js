const express = require('express');
const router = express.Router();


const routerUser = require("./users.router")
const routerOther = require("./other.router")
const routerMessage = require("./message.router")
const routerAuth = require("./auth.router")

router.use("/users", routerUser)
router.use("/messages", routerMessage)
router.use("/auth", routerAuth)
router.use("/", routerOther)


module.exports = router


