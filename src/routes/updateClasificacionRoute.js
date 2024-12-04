const controller = require("../controllers/updateClasificacionController")
var router = require('express').Router()

router.put("/clasificacion/:id", controller.updateClasificacionController)

module.exports = router