angular.module('attrApp').directive('selectDirective', function(){
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      console.log(scope);
      console.log(elem);
      console.log(attrs);

      elem.on('click', function(){
          elem.select()
      })

    }

  }
})
