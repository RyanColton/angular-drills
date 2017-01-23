angular.module('myApp').controller('myController', function($scope, myService){
  $scope.people = myService.myData;
})
