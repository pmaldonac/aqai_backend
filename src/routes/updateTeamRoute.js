const controller = require("../controllers/updateTeamController")
var router = require('express').Router()

router.put("/team/:id", controller.updateTeamController)

module.exports = router