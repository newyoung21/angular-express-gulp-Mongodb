"use strict";
(function(angular){
  angular.module('logonApp', ['ngRoute','loginApp','registerApp','detailApp'])
    .config(['$routeProvider',function($routeProvider) {
      $routeProvider.otherwise({
        redirectTo:'/login'
      })
    }])
})(angular);
