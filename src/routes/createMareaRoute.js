const controller = require("../controllers/createMareaController")
var router = require('express').Router()

router.post("/marea", controller.createMareaController)

module.exports = router