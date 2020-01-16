// var app = angular.module("myapp", ['ui.router']);

// // define route configurations inside app.config 
// // injecting dependencies 
// app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
//     // $locationProvider.html5Mode(true);
//     // creating routes or states 
//     $stateProvider
//         // .state('Home', { 
//         //     url : '/home', 
//         //     template : "<h1>Home Page</h1>", 
//         //     controller : "HomeCtrl"
//         // }) 
//         .state('home', {
//             url: '/home',
//             templateUrl: "app/view/home.html",
//             controller: "homepageController"
//         })
//         .state('signup', {
//             url: '/signup',
//             templateUrl: "app/view/signup.html",
//             controller: "signupController"
//         });

//     // Redirect to home page if url does not  
//     // matches any of the three mentioned above 
//     $urlRouterProvider.otherwise("/home");
//     // $locationProvider.html5Mode({
//     //     enabled: true,
//     //     requireBase: false
//     // });
//     // $locationProvider.hashPrefix();
//     // $state.reload(home)
// });