angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './home.html',
  })
  .state('signUp', {
    url:'/signup',
    templateUrl: './signup.html',
  })
  .state('details', {
    url:'/details',
    templateUrl: './details.html',
    controller: 'mainCtrl'
  })
})
