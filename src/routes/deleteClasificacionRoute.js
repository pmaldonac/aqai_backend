const controller = require("../controllers/deleteClasificacionController")
var router = require('express').Router()

router.delete("/clasificacion/:id", controller.deleteClasificacionController)

module.exports = router