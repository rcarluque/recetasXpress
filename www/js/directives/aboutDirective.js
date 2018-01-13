angular.module('app.aboutDirective', [])

// Directiva de tipo clase que llama a la template de about.
.directive('aboutDirective', function(){

    return {
      	restrict: 'C',
      	templateUrl: "templates/directives/about-directive.html",
    }

});