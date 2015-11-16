require('angular');
require('angular-ui-router');

angular.module('app', [
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/"); //http://localhost/#/
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "partials/main.html"
      })
      .state('settings', {
        url: "/settings",
        templateUrl: "partials/settings.html"
      })
  });
