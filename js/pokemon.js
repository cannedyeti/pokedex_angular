angular.module('PokemonCtrls', [])
.controller('Pokemon', ['$scope', '$location', '$http', function($scope, $location, $http){

  $scope.allPokemon;

  $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon?limit=151'
  }).then(function success(res) {
    console.log("success")
    $scope.allPokemon = res.data.results;
  }, function error(err) {
    console.log("Error", err)
  });
  
}]);
