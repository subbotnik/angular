(function(angular) {
  'use strict';

  angular
    .module('myApp')
    .factory('people', function(){
      var users = [{
        name:'Mike',
        lastName:'Grey',
        number:12345678
      },{
        name:'John',
        lastName:'Light',
        number:13579753
      },{
        name:'Ann',
        lastName:'Brown',
        number:77777777
      },{
        name:'Lisa',
        lastName:'London',
        number:88888888
      },{
        name:'Bob',
        lastName:'Brown',
        number:11111111
      },{
        name:'Sasha',
        lastName:'Twain',
        number:12345678
      }];

      return users;
    }); 

  
})(angular);