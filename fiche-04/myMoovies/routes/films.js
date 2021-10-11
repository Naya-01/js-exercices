var express = require('express');
var router = express.Router();
const { Films } = require("../model/films");
const filmModel = new Films();
/* GET users listing. */
router.get('/', function(req, res, next) {
   return res.json(filmModel.getAll());
});

module.exports = router;
