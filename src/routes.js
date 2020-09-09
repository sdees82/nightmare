angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/home');

  $stateProvider 
    .state('home', {
      url: '/home',
      templateUrl: 'app/views/main.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/views/about.html'
    })
    .state('services', {
      url: '/services',
      templateUrl: 'app/views/services.html'
    })
    .state('getinvolved', {
      url: '/getinvolved',
      templateUrl: 'app/views/contact.html'
    })
    .state('formsubmit', {
      url: '/formsubmit',
      templateUrl: 'app/views/formSubmit.html'
    });
}
