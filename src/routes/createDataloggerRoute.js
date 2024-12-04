const controller = require("../controllers/createDataloggerController")
var router = require('express').Router()

router.post("/datalogger", controller.createDataloggerController)

module.exports = router