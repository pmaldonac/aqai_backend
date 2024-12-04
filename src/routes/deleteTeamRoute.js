const controller = require("../controllers/deleteTeamController")
var router = require('express').Router()

router.delete("/team/:id", controller.deleteTeamController)

module.exports = router