const controller = require("../controllers/createInmersionController")
var router = require('express').Router()

router.post("/inmersion", controller.createInmersionController)

module.exports = router