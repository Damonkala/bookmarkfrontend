var angBookmark = angular.module('angBookmark', []);

function bookmarkController($scope, $http) {
	$.formData = {};



	$http.get('https://blooming-tundra-5710.herokuapp.com/bookmarks')
			.success(function(data){
				$scope.bookmarks = data;
				console.log(data);
			})
			.error(function(data) {
				console.error('Error: ' + data);
			});
	$http.get('https://blooming-tundra-5710.herokuapp.com/tags')
			.success(function(data){
				$scope.tags = data;
				console.log(data);
			})
			.error(function(data) {
				console.error('Error: ' + data);
			});

			$scope.createBookmark = function() {
				$http.post('https://blooming-tundra-5710.herokuapp.com/bookmarks', $scope.formData)
						.success(function(data) {
							$scope.formData = {};
							$scope.bookmarks = data;
							console.log(data);
						})
						.error(function(data){
							console.log('Error: ' + data);
						});
						location.reload();
			};
			$scope.createTag = function() {
				$http.post('https://blooming-tundra-5710.herokuapp.com/tags', $scope.tagData)
						.success(function(data) {
							$scope.tagData = {};
							$scope.tags = data;
							console.log(data);
						})
						.error(function(data){
							console.log('Error: ' + data);
						});
			};

			$scope.deleteBookmark = function(id) {
				$http.delete('https://blooming-tundra-5710.herokuapp.com/bookmarks/' + id)
						.success(function(data) {
							$scope.bookmarks = data;
							console.log(data);
						})
						.error(function(data) {
							console.log('Error: ' + data);
						})
			}
			$scope.deleteTag = function(id) {
				$http.delete('https://blooming-tundra-5710.herokuapp.com/tags/' + id)
						.success(function(data) {
							$scope.tags = data;
							console.log(data);
						})
						.error(function(data) {
							console.log('Error: ' + data);
						})
			}
}
