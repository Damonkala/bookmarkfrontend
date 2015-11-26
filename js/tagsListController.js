
var angBookmark = angular.module('angBookmark')

angBookmark.controller("TagsListCtrl", function($scope, $http, $stateParams) {
  console.log("TagCtrl Loaded")
  $http.get('http://localhost:3000/tags')
      .success(function(data){
        $scope.tag = data;
        console.log("TAG RESPONSE:", data);
      })
      .error(function(data) {
        console.error('Error: ' + data);
      });
  });
