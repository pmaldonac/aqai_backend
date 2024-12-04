const controller = require("../controllers/createBuzoController")
var router = require('express').Router()

router.post("/buzo", controller.createBuzoController)

module.exports = router