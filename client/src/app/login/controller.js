"use strict";
(function(angular){
  angular.module('loginApp', ['ngRoute'])
    .config(['$routeProvider',function($routeProvider) {
      $routeProvider.when('/login',{
        controller:'loginController',
        templateUrl:'/app/login/login.html'
      })
    }])
    .controller('loginController', ['$scope','$http','$location', '$window',
      function($scope,$http,$location,$window){
        $scope.user ={
          name:"",
          password:""
        };
        $scope.message="";
        $scope.passError ="";
        $scope.doLogin = function(){
          if(!$scope.user.name){
            return $scope.message ="不能为空";
          }
          if(!$scope.user.password){
            return $scope.passError="不能为空"
          }
          $http.post('http://localhost:3200/api/user/login',{
            user:{
              name:$scope.user.name,
              password:$scope.user.password
            }
          }).then(function successCallback(res){
            if(res.data.name){
              $window.name = res.data.name;
               $location.path('/detail');
            }else{
              alert(res.data);
            }
           
          }, function errorCallback(res){
            alert("用户名不存在");
          })
        };
    }])
})(angular);
