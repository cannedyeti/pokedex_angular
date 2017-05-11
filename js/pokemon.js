angular.module('PokemonCtrls', ['PokedexServices'])
.controller('PokemonCrtl', ['$scope', '$http', 'Favorites', '$location', function($scope, $http, Favorites, $location){
  $scope.allPokemon;
  $scope.favorites = Favorites.get();
  console.log("favorites: ", $scope.favorites)
  $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon?limit=151'
  }).then(function success(res) {
    $scope.allPokemon = res.data.results;
  }, function error(err) {
    console.log("Error", err)
  });

  $scope.addFavorite = function(id, name){
    Favorites.add(id, name);
    $scope.favorites = Favorites.get();
    $location.path('/favorites');
  };

  $scope.isFavorite = function(id) {
    if ($scope.favorites[id]) {
      return false;
    } else {
      return true;
    }
  }
}])

.controller('PokemonDetailCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
  $scope.loading = "Loading..";
  $scope.details;
  $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon/' + $stateParams.name
  }).then(function success(res) {
    // console.log(res.data)
    $scope.loading = "";
    $scope.details = res.data;
    console.log($scope.details)
  }, function error(err) {
    console.log("Error", err)
  });
  
  $scope.addFavorite = function(id, name){
    Favorites.add(id, name);
    $scope.favorites = Favorites.get();
    $location.path('/favorites');
  };

}])


