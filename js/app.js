var app = angular.module('PokedexApp', ['ui.router', 'PokemonCtrls']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/404');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'PokemonCrtl'
    })
    $stateProvider.state('details', {
      url: '/info/:name',
      templateUrl: './views/details.html',
      controller: 'PokemonDetailCtrl'
    })

    $locationProvider.html5Mode(true);
  }])