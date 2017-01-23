angular.module('myApp').controller('myController', function($scope, myService){

  $scope.persons = myService.myData
})
