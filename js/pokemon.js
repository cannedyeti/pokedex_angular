angular.module('PokemonCtrls', ['PokedexServices'])
.controller('PokemonCrtl', ['$scope', '$http', 'Favorites', '$location', function($scope, $http, Favorites, $location){
  $scope.allPokemon;
  $scope.searchWord;

  $scope.favorites = Favorites.get();

  $scope.hasFavorites = function() {
    if(Object.keys($scope.favorites).length) {
      return true;
    } else {
      return false;
    }
  }
  
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

  $scope.deleteFavorite = function(id) {
    Favorites.delete(id)
    $location.path("/")
  }
}])

.controller('PokemonDetailCtrl', ['$scope', '$http', '$stateParams', 'Favorites', '$location', function($scope, $http, $stateParams, Favorites, $location){
  $scope.loading;
  $scope.details;
  $scope.favorites = Favorites.get();

  getDetails = function(){
    $scope.loading = true;
    $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/' + $stateParams.name
    }).then(function success(res) {
      // console.log(res.data)
      $scope.loading = false;
      $scope.details = res.data;
    }, function error(err) {
      console.log("Error", err)
    });
  };

  getDetails();
  
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


