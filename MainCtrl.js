angular.module('app.controllers.Main', [])
  .controller('MainCtrl', function($scope) {

    $scope.appName = 'NodeLink';

    $scope.fruits = ['Apple', 'Banana', 'Orange'];
    
  })
