const controller = require("../controllers/updateActividadFaenaController")
var router = require('express').Router()

router.put("/actividad/:id", controller.updateActividadFaenaController)

module.exports = router