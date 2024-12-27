const controller = require("../controllers/updateUsuarioController")
var router = require('express').Router()

router.put("/usuario/:id", controller.updateUsuarioController)

module.exports = router