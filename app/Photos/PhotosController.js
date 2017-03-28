app.controller('photosController', function($scope, $routeParams, PhotosService, UpgradeDomService) {
	$scope.loading = true;
	$scope.pageSize = 10;
	$scope.pageNumber = 1;
	$scope.setPageSize = function (pageSize) {
		$scope.pageSize = pageSize;
		$scope.pageNumber = 1;
		getPhotosByAlbumId();
	};
	$scope.onSelectPage = function (pageNumber) {
		$scope.pageNumber = pageNumber;
		getPhotosByAlbumId();
	};

	function getPhotosByAlbumId() {
		PhotosService.getPhotosByAlbumId($scope.pageSize, $scope.pageNumber, $routeParams.id).then(
			function onSuccess(response) {
				$scope.photosErrorMesage = null;
				$scope.photos = response.photos;
				$scope.photosQuantity = response.photosQuantity;
				$scope.loading = false;
				debugger;
			},
			function onError(response) {
				console.log(response);
				$scope.photosErrorMesage = response;
				$scope.loading = false;
			}
		);
	}

	getPhotosByAlbumId();
	
	UpgradeDomService.upgradeDom();

});