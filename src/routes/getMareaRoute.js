const controller = require("../controllers/getMareaController")
var router = require('express').Router()

router.get("/mareas", controller.getMareaController)

module.exports = router