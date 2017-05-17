angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
    mainService.getUsers().then(function(response) {

      $scope.users = response.data.data;
      console.log(response.data.data)

    });
  }
  $scope.getUsers();
});