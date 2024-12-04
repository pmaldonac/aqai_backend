const controller = require("../controllers/getDataloggerByInmersionController")
var router = require('express').Router()

router.get("/datalogger/:idFaena/:idBuzo", controller.getDataloggerByInmersion)

module.exports = router