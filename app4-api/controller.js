angular.module('apiApp').controller('apiController', function($scope, apiService){
  $scope.getSwApi = function(){
    apiService.swAPI().then(function(response){
      $scope.swApi = response.data.results;
    })
  }
  $scope.getSwApi()
})
