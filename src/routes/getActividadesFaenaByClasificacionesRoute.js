const controller = require("../controllers/getActividadesFaenaByClasificacionController")
var router = require('express').Router()

router.get("/actividades/:id", controller.getActividadesFaenaByClasificacion)

module.exports = router