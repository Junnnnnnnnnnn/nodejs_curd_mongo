var express = require("express");
var router = express.Router();

var index = require("./index/controller/IndexController")


router.get("/", index.home);




module.exports = router