const controller = require("../controllers/deleteInmersionController")
var router = require('express').Router()

router.delete("/inmersion/:idFaena/:idBuzo", controller.deleteInmersionController)

module.exports = router