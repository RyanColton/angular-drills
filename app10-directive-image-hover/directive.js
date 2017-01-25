angular.module('app')
.directive('pictureDir', function(){
  return {
    restrict:'E',
    templateUrl: './pictureDir.html',
    scope: {
      str: '@'
    }
  }
})
