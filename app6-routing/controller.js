angular.module('myApp').controller('mainCtrl', function($scope, mainService){
$scope.signIn = function(user){
  alert('Hey ' + user.username + ', ' + user.password + ' is a very bad password');
  $state.go('details');
}

$scope.getPlanets = function(){
  mainService.getPlanets().then(function(response){
    $scope.planets = response;
  })
}

$scope.getPlanets()
})
