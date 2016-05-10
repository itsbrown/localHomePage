'use strict';

// Declare app level module which depends on views, and components
angular.module('GNCApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('index.html', {
          templateUrl: 'views/home.html',
          controller: 'MainGNC'
      })
  .otherwise('/index');
}]);
