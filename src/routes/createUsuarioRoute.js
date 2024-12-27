const controller = require("../controllers/createUsuarioController")
var router = require('express').Router()

router.post("/usuario", controller.createUsuarioController)

module.exports = router