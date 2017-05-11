angular.module('PokedexApp', ['ui.router', 'PokemonCtrls'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/404');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'PokemonCrtl'
    })
    .state("details", {
      url: '/info/:name',
      templateUrl: './views/details.html',
      controller: 'PokemonDetailCtrl'
    })
    .state("favorites", {
      url: '/favorites',
      templateUrl: './views/favorites.html',
      controller: 'PokemonCrtl'
    })

    $locationProvider.html5Mode(true);
  }])