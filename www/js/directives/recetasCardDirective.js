angular.module('app.recCardDirective', [])

// Directiva para que muestre las card de recetas. De tipo elemento. Recibe dos parametros desde la vista
.directive('recetasCard', function(){

    return {
      	restrict: 'E',
      	templateUrl: "templates/directives/recetas-card.html",
      	// Con el scope recogemos las variables que se le pasan desde recetas.html
    	scope: {
			titulo: '@',
			img: '@'
		}
    }

});