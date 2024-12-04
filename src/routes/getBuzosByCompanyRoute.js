const controller = require("../controllers/getBuzosByCompanyController")
var router = require('express').Router()

router.get("/buzos/:company", controller.getBuzosController)

module.exports = router