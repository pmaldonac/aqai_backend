const controller = require("../controllers/getInmersionbyFaenaController")
var router = require('express').Router()

router.get("/inmersiones/:id", controller.getInmersionByFaenaController)

module.exports = router