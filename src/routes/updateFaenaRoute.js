const controller = require("../controllers/updateFaenaController")
var router = require('express').Router()

router.put("/faena/:id", controller.updateFaenaController)

module.exports = router