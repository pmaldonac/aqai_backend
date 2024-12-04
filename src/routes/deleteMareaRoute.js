const controller = require("../controllers/deleteMareaController")
var router = require('express').Router()

router.delete("/marea/:id", controller.deleteMareaController)

module.exports = router