var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');



router.get('/', function(req, res){
  var pokemonUrl = 'http://pokeapi.co/api/v2/pokemon?limit=151';
  var pokemon;
  request(pokemonUrl, function(error, response, body) {
    pokemon = JSON.parse(body).results;
    // res.send(pokemon)
    res.render('index', { pokemon: pokemon });
  });
});

module.exports = router;