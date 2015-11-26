
var angBookmark = angular.module('angBookmark')

angBookmark.controller("TagCtrl", function($scope, $http, $stateParams) {
  console.log("TagCtrl Loaded")
  $http.get('https://blooming-tundra-5710.herokuapp.com/tags/' + $stateParams.name)
      .success(function(data){
        $scope.tag = data[0];
        console.log("TAG RESPONSE:", data);
      })
      .error(function(data) {
        console.error('Error: ' + data);
      });
  $http.get('https://blooming-tundra-5710.herokuapp.com/bookmarks/' + $stateParams.name)
      .success(function(data){
        $scope.bookmarks = data;
        console.log("BOOKMARK RESPONSE:", data);
      })
      .error(function(data) {
        console.error('Error: ' + data);
      });
  });
