angular.module("myapp", [])
    .controller("HelloController", function ($scope, $http) {
       
        // -----------------------------------------ANGULAR JS COAD---------------------------------------------------------
        
        // $scope.credentials = {
        //     'email': '',
        //     'password': '',
        //     'address': '',
        //     'address2': '',
        //     'city': '',
        //     'zip': ''
        // }

        $scope.dataAvailable = $scope.dataStore;
        $scope.response = [];

        // $scope.signin = () => (console.log($scope.credentials),
        //     $scope.response.push($scope.credentials),
        //     $scope.dataStore = $scope.response.push($scope.credentials),
        //     $scope.credentials = "");

        $scope.signin =  (credentials) => (
            $scope.datateman = {
                'email': credentials.email,
                'password': credentials.password,
                'address': credentials.address,
                'address2': credentials.address2,
                'city': credentials.city,
                'zip': credentials.zip
            },
            $scope.credentials = "",
            $http.post('https://jsonplaceholder.typicode.com/posts', $scope.datateman, {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }));

        // vm.getDataFromService = function() {
        //     $http({
        //         method: 'GET',
        //         url: 'https://jsonplaceholder.typicode.com/posts'
        //     }).then(function successCallback(response) {

        //         var data = response.data;
        //     }, function errorCallback(response) {
        //         // called asynchronously if an error occurs
        //         // or server returns response with an error status.
        //     });
        // }


        // -----------------------------------------ANGULAR JS COAD END---------------------------------------------------------

        // --------------------------------------JQUERY TUTORIAL STARTED--------------------------------------------

        // # EVENTS

        // click(), dblclick(), mouseenter(), mouseleave(), mousedown(), mouseup(), hover(), focus(), blur(), on() 

        // # JQUERY EFFECTS

        // show(), hide(), toggle(),fadeIn(), fadeOut(), fadeToggle(), fadeTo(), slideUp(), slideDown(), slideToggle(), animate()
        // $(document).ready(function() {
        // $("#DropdownId").mouseenter(function() { //---------------EVENTS
        //     $(".dropdown-menu").show(); //--------SELECTORS AND EFFECTS 
        // });

        // $("#DropdownId").mouseleave(function() {
        //     $(".dropdown-menu").hide();
        // });

        // $(".hide_content").click(function() {
        //     $(".jqueryNew").toggle();
        // });

        // $(".hide_content").click(() => ($(".jqueryNew").toggle();))


        // $("#animateme").click(function() {
        //     $("#animate").hide("slow", function() {
        //         alert("The paragraph is now hidden"); // ----- CALLBACK FUNCTION
        //     })
        // });

        // $("#searchBtn").click(function() {
        //     alert('Search text is ' + $("#search").val());
        // });

        // # jQUERY HTML

        // $("#nightmode").click(function() {
        //     $("#container").toggleClass("nightmode");
        // });
        // )}

        // $("button").click(function() {
        //     $("#div1").load("Test.txt");
        // });

    });