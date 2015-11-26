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
			};

			$scope.deleteBookmark = function(name) {
				$http.delete('http://localhost:3000//bookmarks' + name)
						.success(function(data) {
							$scope.bookmarks = data;
							console.log(data);
						})
						.error(function(data) {
							console.log('Error: ' + data);
						})
			}
}
