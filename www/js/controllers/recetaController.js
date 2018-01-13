angular.module('app.recetaController', [])

// Controlador para pasar los datos entre el services y routes
.controller('recetaCtrl', function($scope, $stateParams) { 

	// Recoge el nombre y la id con state params y las guarda en una variable del mismo nombre pero en $scope
	$scope.nombre = $stateParams.nombre;
	$scope.id = $stateParams.id;

	// Creamos una variable tipo scope y la igualamos al filtro por id de scope recetas.
	$scope.recByName = $scope.recetas.filter(function (receta) {
	    return (receta.id == $scope.id);
	});


});