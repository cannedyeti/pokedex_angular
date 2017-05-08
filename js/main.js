var app = angular.module('PokedexApp', ['ui.router', 'PokemonCtrls']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/404');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/home.html',
      controller: 'Pokemon'
    })

    $locationProvider.html5Mode(true);
  }])
 