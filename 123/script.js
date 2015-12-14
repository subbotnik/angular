var app = angular.module('myApp', []);
app.controller('controller', function($scope){
  $scope.peopleName = '';
  $scope.people=[];
    
    $scope.newItem = function(name){
      if (this.peopleName === '') 
      return;
       $scope.people.push({
    		name: name
    	});
    	this.peopleName= "";
    }
})