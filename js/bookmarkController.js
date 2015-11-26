// var angBookmark = angular.module('angBookmark')
//
// angBookmark.controller("BookmarkCtrl", function($scope, $http, $stateParams) {
//   console.log("BookmarkCtrl Loaded")
//   $http.get('http://localhost:3000/bookmarks/' + $stateParams.id)
//       .success(function(data){
//         $scope.bookmark = data;
//         console.log("RESPONSE:", data);
//       })
//       .error(function(data) {
//         console.error('Error: ' + data);
//       });
//   });
var angBookmark = angular.module('angBookmark')

angBookmark.controller("BookmarkCtrl", function($scope, $http, $stateParams) {
  console.log("BookmarkCtrl Loaded")
  $http.get('https://blooming-tundra-5710.herokuapp.com/bookmarks/' + $stateParams.name)
      .success(function(data){
        $scope.bookmark = data;
        console.log("RESPONSE:", data);
      })
      .error(function(data) {
        console.error('Error: ' + data);
      });
  });
