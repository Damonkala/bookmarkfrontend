var angBookmark = angular.module('angBookmark', []);

function bookmarkController($scope, $http) {
	$.formData = {};



	$http.get('http://localhost:3000/bookmarks')
			.success(function(data){
				$scope.bookmarks = data;
				console.log(data);
			})
			.error(function(data) {
				console.error('Error: ' + data);
			});
	$http.get('http://localhost:3000/tags')
			.success(function(data){
				$scope.tags = data;
				console.log(data);
			})
			.error(function(data) {
				console.error('Error: ' + data);
			});

			$scope.createBookmark = function() {
				$http.post('http://localhost:3000/bookmarks', $scope.formData)
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
				$http.post('http://localhost:3000/tags', $scope.tagData)
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
				$http.delete('http://localhost:3000/bookmarks/' + id)
						.success(function(data) {
							$scope.bookmarks = data;
							console.log(data);
						})
						.error(function(data) {
							console.log('Error: ' + data);
						})
			}
			$scope.deleteTag = function(id) {
				$http.delete('http://localhost:3000/tags/' + id)
						.success(function(data) {
							$scope.tags = data;
							console.log(data);
						})
						.error(function(data) {
							console.log('Error: ' + data);
						})
			}
}
