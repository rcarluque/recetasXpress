angular.module('app.mainController', [])

// Controlador para pasar los datos entre el services y routes
.controller('MainCtrl', function($scope, $ionicPopup, dataService) { 

	// Creamos una variable ruta, que será desde dónde recoga los datos el servicio.
	// Le pasamos la variable posteriormente a getRecetas
	var ruta = 'http://recetasxpress.esy.es/api/recetas.json';

	// Llama al método get Recetas y guarda los datos obtenidos (data) en $scope.recetas
	dataService.getData(ruta).success(function(data){
        $scope.recetas = data;
     });

	// Creamos la ruta de la portada
	var ruta = 'http://recetasxpress.esy.es/api/portada.json';

	// Llama al método get Recetas y guarda los datos obtenidos (data) en $scope.portada.
	// Muestra un error en caso de que no se haya podido realizar
	dataService.getData(ruta).success(function(data){
        $scope.portada = data;
     }).error(function(){
	     	$ionicPopup.confirm({
	          title: 'Error en la carga de datos',
	          content: 'Algo ha fallado al cargar los datos'
	        });
		});

});