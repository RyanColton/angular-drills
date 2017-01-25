angular.module('login').directive('loginDirective', function(){
  return {
    restrict: 'E',
    templateUrl: 'login.html',
    controller: function($scope){
      $scope.logInUser = function(user){
        alert('WOOOO! User ' + user.username + " logged in sucessfully with password: \'" + user.password + '\'')
      }
    }
  }
})
