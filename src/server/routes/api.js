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
  if ((upc.length === 11|| upc.length === 13) && upc.charAt(0) === '0') {
    upc = upc.slice(1, upc.length);
  }
  Movies().select().where('UPC', upc).then(function (data) {
    res.json(data);
  }).catch(function(err) {
    res.json(err);
  });
}

module.exports = router;
