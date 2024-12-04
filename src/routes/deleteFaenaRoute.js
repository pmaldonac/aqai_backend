const controller = require("../controllers/deleteFaenaController")
var router = require('express').Router()

router.delete("/faena/:id", controller.deleteFaenaController)

module.exports = router