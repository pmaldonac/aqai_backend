const controller = require("../controllers/updateInmersionController")
var router = require('express').Router()

router.put("/inmersion/:idFaena/:idBuzo", controller.updateInmersionController)

module.exports = router