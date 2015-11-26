
var angBookmark = angular.module('angBookmark')

angBookmark.controller("TagCtrl", function($scope, $http, $stateParams) {
  console.log("TagCtrl Loaded")
  $http.get('http://localhost:3000/tags/' + $stateParams.id)
      .success(function(data){
        $scope.tag = data;
        console.log("TAG RESPONSE:", data);
      })
      .error(function(data) {
        console.error('Error: ' + data);
      });
  $http.get('http://localhost:3000/bookmarks/' + $stateParams.id)
      .success(function(data){
        $scope.bookmarks = data;
        console.log("BOOKMARK RESPONSE:", data);
      })
      .error(function(data) {
        console.error('Error: ' + data);
      });
  });
