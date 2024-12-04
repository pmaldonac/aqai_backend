const controller = require("../controllers/createActividadesFaenaController")
var router = require('express').Router()

router.post("/actividad", controller.createActividadesFaenaController)

module.exports = router