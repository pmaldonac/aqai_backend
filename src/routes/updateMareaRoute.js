const controller = require("../controllers/updateMareaController")
var router = require('express').Router()

router.put("/marea/:id", controller.updateMareaController)

module.exports = router