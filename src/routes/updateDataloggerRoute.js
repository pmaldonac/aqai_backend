const controller = require("../controllers/updateDataloggerController")
var router = require('express').Router()

router.put("/datalogger/:id", controller.updateDataloggerController)

module.exports = router