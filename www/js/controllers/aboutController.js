angular.module('app.aboutController', [])

// Controlador del html about. Como funciones tiene scope e ionicpopup que sirve para lanza un pop up.
.controller('aboutCtrl', function($scope, $ionicPopup, $ionicLoading, dataService) { 

	var ruta = 'http://recetasxpress.esy.es/api/about.json';

	dataService.getData(ruta).success(function(data){
        $scope.about = data;
     });

	// Expresión regular con la que comprobaremos el input de email
	$scope.regex = /^[A-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

	// Función que lanzará un popup de tipo confirm (De prueba para ver que hemos puesto un email correcto)
	$scope.suscribe = function() {
        $ionicPopup.confirm({
	        title: 'Datos enviados',
	        content: 'Gracias por suscribirte'
	    });
    }; 

    // Scripts para google maps
    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "Nuestra Localización"
            });
        });
 
        $scope.map = map;
    });

});
