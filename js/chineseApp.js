/*
===================================================
  AngularJS Scripts for Chinese Notebook 
  2016, Stacy Bridges
===================================================
*/
// Angular.JS
var chineseApp = angular.module('myChinese', ['ngRoute']);

// routing definitions
chineseApp.config(function ($routeProvider) {
    $routeProvider
   .when('/', {
       templateUrl: 'pages/ct_L1.html',
       controller: 'mainController'
   })
   .when('/1', {
       templateUrl: 'pages/ct_L1.html',
       controller: 'mainController'        
   })
   .when('/2', {
       templateUrl: 'pages/ct_L2.html',
       controller: 'mainController'        
   })
   .when('/3', {
       templateUrl: 'pages/ct_L3.html',
       controller: 'mainController'        
   })   
   .when('/4', {
       templateUrl: 'pages/ct_L4.html',
       controller: 'mainController'        
   })   
   .when('/5', {
       templateUrl: 'pages/ct_L5.html',
       controller: 'mainController'        
   })   
   .when('/6', {
       templateUrl: 'pages/ct_L6.html',
       controller: 'mainController'        
   })      
   .when('/7', {
       templateUrl: 'pages/ct_L7.html',
       controller: 'mainController'        
   })  
    .when('/8', {
       templateUrl: 'pages/ct_L8.html',
       controller: 'mainController'        
   })  
    .when('/9', {
       templateUrl: 'pages/ct_L9.html',
       controller: 'mainController'        
   })      
    .when('/10', {
       templateUrl: 'pages/ct_L10.html',
       controller: 'mainController'        
   })      
});

// controller
chineseApp.controller('mainController', ['$scope', function ($scope) {
  loadD1();  // after routing to new page, load the correct dialogue and audio
}]);
