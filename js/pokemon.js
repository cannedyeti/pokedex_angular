angular.module('PokemonCtrls', [])
.controller('PokemonCrtl', ['$scope', '$http', function($scope, $http){
  $scope.allPokemon;
  $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon?limit=151'
  }).then(function success(res) {
    $scope.allPokemon = res.data.results;
  }, function error(err) {
    console.log("Error", err)
  });
}])
.controller('PokemonDetailCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
  $scope.pokemonDetail
  $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon/' + $stateParams.name
  }).then(function success(res) {
    console.log(res.data)
    // $scope.pokemonDetail = res.data.results;
  }, function error(err) {
    console.log("Error", err)
  });
}])
