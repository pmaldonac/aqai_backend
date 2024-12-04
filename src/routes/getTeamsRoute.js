const controller = require("../controllers/getTeamsController")
var router = require('express').Router()

router.get("/teams", controller.getTeamsController)

module.exports = router