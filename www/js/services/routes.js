angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MainCtrl'
  })

  // Estados anidados

  // Estado para la pestaña recetas
  .state('app.recetas', {
    url: '/recetas',
    views: {
      'menuContent': {
        templateUrl: 'templates/recetas.html'
      }
    }
  })

  // Pestaña about
  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  // Estado para la pagina categoria
  .state('app.categoria', {
    url: '/recetas/:categoria',
    views: {
      'menuContent': {
        templateUrl: 'templates/categoriaTemplate.html',
        controller: 'categoriaCtrl'
        
      }
    } 
    
  })

  .state('app.receta', {
    url: '/recetas/:categoria/:nombre/:id',
    views: {
      'menuContent': {
		    templateUrl: 'templates/recetaTemplate.html',
		    controller: 'recetaCtrl'
      }
    }  
    
  })

$urlRouterProvider.otherwise('/app/recetas')

});