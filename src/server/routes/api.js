var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
function Movies() {
  return knex('movies');
}

router.get('/:upc', getMovieByUpc);

///////////////////////////////////

function getMovieByUpc(req, res, next) {
  var upc = req.params.upc;
  Movies().select().where('UPC', upc).then(function (data) {
    res.json(data);
  }).catch(function(err) {
    throw new Error(err);
  });
}

module.exports = router;
