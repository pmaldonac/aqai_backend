const controller = require("../controllers/deleteDataloggerController")
var router = require('express').Router()

router.delete("/datalogger/:id", controller.deleteDataloggerController)

module.exports = router