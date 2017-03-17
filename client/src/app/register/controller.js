"use strict";
(function(){
  
  angular.module('registerApp', ['ngRoute'])
    .config(['$routeProvider',function($routeProvider) {
      $routeProvider.when('/register',{
        controller:'registerController',
        templateUrl:'/app/register/register.html'
      });
    }])
    .controller('registerController', ['$scope','$location','$http',
      function($scope,$location,$http){
          $scope.user ={
            name:"",
            password:"",
            Tpassword:""
          };
       
         //提交数据
         $scope.doRegister = function(data){
          if(!data){
            return alert("请按规则填写 ！");
          }
          $http.post('http://localhost:3200/api/user/register',{
            user:{
              name:$scope.user.name,
              password:$scope.user.password
            }
          }).then(function successCallback(res){
            alert("注册成功 ！");
            return $location.path('/login');
          }, function errorCallback(res){
            alert("抱歉出错！");
          })
         };
    }])
    .directive('pwdRepeat', [ function(){
      // Runs during compile
      return {
        require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        link: function($scope, iElm, iAttrs, ctrl) {
          ctrl.$validators.pwdRepeat = function(modelValid){
            return modelValid === $scope.user.password ? true : false;
          } 
        }
      };
    }])
    .directive('userName', ['$q','$http',function($q,$http){
      // Runs during compile
      return {
        require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        link: function($scope, iElm, iAttrs, ctrl) {
          ctrl.$asyncValidators.userName = function(modelValid){
            var d = $q.defer();
            $http.get('http://localhost:3200/api/user/userName')
              .then(function successCallback(obj){
                var data = obj.data;
                for(var i = 0 ; i<data.length; i++){
                  if(data[i].name === modelValid){
                      console.log("正点");
                      var c = true;
                      return d.reject();  
                  }
                }
                if(!c){
                  d.resolve();
                }
              },function errorCallback(obj){
                console.log("Dfdf");
            });
            return d.promise; 
          }
        }
      };
    }]);
})();