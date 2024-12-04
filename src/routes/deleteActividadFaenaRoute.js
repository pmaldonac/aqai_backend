const controller = require("../controllers/deleteActividadFaenaController")
var router = require('express').Router()

router.delete("/actividad/:id", controller.deleteActividadFaenaController)

module.exports = router