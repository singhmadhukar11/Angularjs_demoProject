angular.module("myapp", ['ui.router', 'ngStorage'])
    .controller("HelloController", ["$scope", "$http", "commonService", "$state", '$localStorage', function ($scope, $http, commonService, $state, $localStorage) {

        // -----------------------------------------ANGULAR JS COAD---------------------------------------------------------

        // $scope.credentials = {
        //     'email': '',
        //     'password': '',
        //     'address': '',
        //     'address2': '',
        //     'city': '',
        //     'zip': ''
        // };

        $scope.signup = function () {
            $state.go('signup');
            console.log('State');
        };

        $scope.message = commonService.message;
        $scope.dataAvailable = $scope.dataStore;
        $scope.listData = [];


        $scope.addDataDetails = (credentials) => {

            let dataDetails = {
                id: $scope.listData.length + 1,
                email: credentials.email,
                password: credentials.password,
                address: credentials.address,
                address2: credentials.address2,
                city: credentials.city,
                zip: credentials.zip
            };

            $scope.listData.push(dataDetails);
            clearField();

        };

    $scope.updateDataDetails = (credentials) => {};

        $scope.deleteRowData = (data) => {
            $scope.index = $scope.listData.indexOf(data);
            $scope.listData.splice($scope.index, 1);
            console.log("Deleted Sucessfully" + data)
    };

        $scope.bindSelectedData = (data) => {
            $scope.credentials.email = data.email,
                $scope.credentials.password = data.password,
                $scope.credentials.address = data.address,
                $scope.credentials.address2 = data.address2,
                $scope.credentials.city = data.city,
                $scope.credentials.zip = data.zip
        };

        $scope.updateDataDetails = () => {

        };

        let clearField = () => {
            $scope.credentials.email = '',
                $scope.credentials.password = '',
                $scope.credentials.address = '',
                $scope.credentials.address2 = '',
                $scope.credentials.city = '',
                $scope.credentials.zip = ''
        };

        $localStorage.listData = $scope.listData;

    

        // if($scope.listData.length !==0){
        //     $localStorage.listData = $scope.listData;
        // }

        // $scope.clearFields = () => {
        //     'id' = 0

        // };

        // $scope.signin = () => {
        // console.log($scope.credentials);
        // $scope.response.push($scope.credentials);
        // $scope.dataStore = $scope.response.push($scope.credentials);
        // $scope.credentials = "";
        // };


        // $scope.signin = (credentials) => {
        //     $scope.datateman = {
        //         'email': credentials.email,
        //         'password': credentials.password,
        //         'address': credentials.address,
        //         'address2': credentials.address2,
        //         'city': credentials.city,
        //         'zip': credentials.zip
        //     };
        //     $scope.dataStore = $scope.response.push($scope.datateman);
        //     console.log($scope.dataStore);
        //     $scope.credentials = "";
        //     $http.post('https://jsonplaceholder.typicode.com/posts', $scope.datateman, {
        //         headers: {
        //             'Content-Type': 'application/json; charset=utf-8'
        //         }
        //     })
        // };

        /* vm.getDataFromService = function() {
            $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts'
            }).then(function successCallback(response) {

                var data = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        } */


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

    }]);
