angular.module('app.categoriaController', [])
   
.controller('categoriaCtrl', function ($scope, $stateParams) {
	
	// Recoge los parametros de categoria y los guarda en un scope categoria
	$scope.categoria = $stateParams.categoria;
	
	// Creamos un $scope.Lisrecetas para poder ser llamada desde el html.
	// Esta variable se igualará a scope.recetas, que se le aplicará un filto
	// según la categoria
	$scope.listRecetas = $scope.recetas.filter(function (receta) {
	    return (receta.categoria == $scope.categoria);
	});

});
