const controller = require("../controllers/loginUsuarioController")
var router = require('express').Router()

router.post("/login", controller.loginUsuarioController)

module.exports = router