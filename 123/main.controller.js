(function(angular) {
  'use strict';

  angular
    .module('myApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = [
    '$scope'
  ];

  function MainCtrl(
    $scope
  ) {
    $scope.peopleName = '';
    $scope.people = [{
        name: 'works'
      }];

    $scope.newItem = newItem;

    function newItem(name) {
      if ($scope.peopleName === '')
        return;

      $scope.people.push({
        name: name
      });
      $scope.peopleName = "";
    }
  }
})(angular);
