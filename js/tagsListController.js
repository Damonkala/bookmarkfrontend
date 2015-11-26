
var angBookmark = angular.module('angBookmark')

angBookmark.controller("TagsListCtrl", function($scope, $http, $stateParams) {
  console.log("TagCtrl Loaded")
  $http.get('https://blooming-tundra-5710.herokuapp.com/tags')
      .success(function(data){
        $scope.tag = data;
        console.log("TAG RESPONSE:", data);
      })
      .error(function(data) {
        console.error('Error: ' + data);
      });
  });
