const controller = require("../controllers/getFaenasByMareaController")
var router = require('express').Router()

router.get("/faenas/:id", controller.getFaenasByMareaController)

module.exports = router