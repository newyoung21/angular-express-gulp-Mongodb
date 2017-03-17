"use strict";
angular.module('detailApp', ['ngRoute'])
  .config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/detail',{
      controller:"detailController",
      templateUrl:"/app/detail/detail.html"
    });
  }])
  .controller('detailController', ['$scope', '$window','$location',
    function($scope,$window,$location){
        $scope.user = $window.name;
        $scope.exit = function(){
          $location.path('/');
          $window.name ="";
        }
    }
  ])