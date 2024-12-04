const controller = require("../controllers/deleteBuzoController")
var router = require('express').Router()

router.delete("/buzo/:id", controller.deleteBuzoController)

module.exports = router