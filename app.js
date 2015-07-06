'use strict'

var app = angular.module('app', ['ui.router']);

app.controller('TestController', ['$scope', function($scope){
 $scope.items = [1, 3, 5,6];
}]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/user');

  $stateProvider
    .state('user', {
      url: '/user',
      templateUrl: 'partials/user.html'
    })
    .state('user.list', {
      url: '/list',
      templateUrl: 'partials/user.list.html',
      controller: 'TestController'
    })
    .state('activity', {
      url: '/activity',
      templateUrl: 'partials/activity.html'
    })
    .state('activity.list', {
      url: '/list',
      templateUrl: 'partials/activity.list.html',
      controller: function($scope) {
        $scope.things = ['hahs', 'test'];
      }
    })
}]);
