angular.module('PokedexServices', [])

.factory('Favorites', ["$window", function($window){
  return {
    add: function(id, name){
      temp = $window.localStorage["favoritePokemon"] ? JSON.parse($window.localStorage["favoritePokemon"]) : {}
      if( !(id in temp) ){
        temp[id] = {};
        temp[id]["name"] = name;
        $window.localStorage["favoritePokemon"] = JSON.stringify(temp);
      }
      return this.get();
    },
    get: function(){
      if($window.localStorage["favoritePokemon"]){
        return JSON.parse($window.localStorage["favoritePokemon"]);
      } else {
        return {};
      }
    },
    delete: function(id){
      if($window.localStorage["favoritePokemon"]){
          var temp = JSON.parse($window.localStorage["favoritePokemon"]);
          delete temp[id];
          $window.localStorage["favoritePokemon"] = JSON.stringify(temp);
      }
      return this.get();
    }
  };
}]);