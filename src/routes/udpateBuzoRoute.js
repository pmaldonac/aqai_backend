const controller = require("../controllers/updateBuzoController")
var router = require('express').Router()

router.put("/buzo/:id", controller.updateBuzoController)

module.exports = router