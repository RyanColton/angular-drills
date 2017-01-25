angular.module('myApp').service('mainService', function($http, $q){
this.getPlanets = function(){
  return $http({
    method: 'GET',
    url: 'http://swapi.co/api/planets/'
  }).then(function(response){
    return response.data.results;
  })
}
})
