var app = angular.module("myapp", ['ui.router', 'ngStorage']); 
  
// define route configurations inside app.config 
// injecting dependencies 
app.config(function($stateProvider, $locationProvider,  $urlRouterProvider) { 
  
    // creating routes or states 
    $stateProvider 
        // .state('Home', { 
        //     url : '/home', 
        //     template : "<h1>Home Page</h1>", 
        //     controller : "HomeCtrl"
        // }) 
        .state('Login', { 
            url : '/login', 
            template : "<h1>Login Page</h1>", 
            controller : "LoginCtrl"
        }) 
        .state('signup', { 
            url : '/signup', 
            template : "<h1>Signup Page</h1>", 
            controller : "signupController"
        }); 
  
    // Redirect to home page if url does not  
    // matches any of the three mentioned above 
    // $urlRouterProvider.otherwise("/home"); 
}); 