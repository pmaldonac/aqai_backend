const controller = require("../controllers/createClasificacionController")
var router = require('express').Router()

router.post("/clasificacion", controller.createClasificacionController)

module.exports = router