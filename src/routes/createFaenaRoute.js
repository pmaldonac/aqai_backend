const controller = require("../controllers/createFaenaController")
var router = require('express').Router()

router.post("/faena", controller.createFaenaController)

module.exports = router