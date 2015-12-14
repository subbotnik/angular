(function(angular) {
  'use strict';

  angular
    .module('myApp')
    .service('peopleService', function(people){
      var api = {
        getPeople: getPeople
      };
      return api;
      ////////////////////////////
      function getPeople(){
        return people;
      }
    }); 

  
})(angular);