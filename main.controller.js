(function(angular) {
  'use strict';

  angular
    .module('myApp')
    .controller('GangBang', function($scope, peopleService){
       $scope.users = peopleService.getPeople();
       $scope.addUser = addUser;
       $scope.removeItem = removeItem;
       $scope.modal = false;
          $scope.editItem = editItem;
      function addUser(user){
        var newUser = angular.copy(user);
        $scope.users.push(newUser);
          $scope.user = {};
      }
       function removeItem($index){
          $scope.users.splice($index, 1);
       }
        function editItem(user){
            $scope.activeUser = user;
        }
          function updateItem(user){
              $scope.activeUser = null;
          }
    });
  
})(angular);