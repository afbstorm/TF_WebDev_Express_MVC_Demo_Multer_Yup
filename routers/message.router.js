const express = require('express');
const routerMessage = express.Router();


routerMessage.get("", (req, res) => {})
routerMessage.get("/:id", (req, res) => {})
routerMessage.post("", (req, res) => {})
routerMessage.patch("/:id", (req, res) => {})
routerMessage.delete("/:id", (req, res) => {})



module.exports = routerMessage