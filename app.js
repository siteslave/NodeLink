require('angular');
require('angular-ui-router');

angular.module('app', [
    'ui.router',
    'app.controllers.Main'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/"); //http://localhost/#/
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "partials/main.html",
        controller: 'MainCtrl'
      })
      .state('settings', {
        url: "/settings",
        templateUrl: "partials/settings.html"
      })
  });
