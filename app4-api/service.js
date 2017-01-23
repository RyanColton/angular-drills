angular.module('apiApp').service('apiService', function($http){
  this.swAPI = function(){
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people'
    })
  }


})
