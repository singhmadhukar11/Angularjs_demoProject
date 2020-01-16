angular.module("myapp")
    .controller("signupController", function ($scope, $http, $rootScope) {

        $scope.listData = [];

        $scope.$on("saveData", function (evt, data) {
            console.log('Data Received');
            $scope.listData.push(data);
        });

        $scope.deleteRowData = (data) => {
            $scope.index = $scope.listData.indexOf(data);
            $scope.listData.splice($scope.index, 1);
            console.log("Deleted Sucessfully" + data.id)
        };

        $scope.bindSelectedData = (data) => {
            $scope.$root.$broadcast('child', data); // going up!
        };

    });
