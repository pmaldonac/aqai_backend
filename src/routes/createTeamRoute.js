const controller = require("../controllers/createTeamController")
var router = require('express').Router()

router.post("/team", controller.createTeamController)

module.exports = router