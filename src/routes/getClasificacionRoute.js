const controller = require("../controllers/getClasificacionesController")
var router = require('express').Router()

router.get("/clasificaciones", controller.getClasificacionesController)

module.exports = router