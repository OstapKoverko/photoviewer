app.controller('photosController', function($scope, $routeParams, LoadDataService, UpgradeDomService) {
	$scope.loading = true;
	window.sessionStorage.currentAlbumId = $routeParams.id;
	$scope.setPageSize = function (pageSize) {
		window.sessionStorage.pageSize = pageSize;
		window.sessionStorage.pageNumber = 1;
		$scope.pageSize = pageSize;
		$scope.pageNumber = 1;
		getPhotosByAlbumId();
	};
	$scope.onSelectPage = function (pageNumber) {
		window.sessionStorage.pageNumber = pageNumber;
		$scope.pageNumber = pageNumber;
		getPhotosByAlbumId();
	};

	function getPhotosByAlbumId() {
		LoadDataService.getPhotosByAlbumId($scope.pageSize, $scope.pageNumber, $routeParams.id).then(
			function onSuccess(response) {
				$scope.photosErrorMesage = null;
				$scope.photos = response.photos;
				$scope.photosQuantity = response.photosQuantity;
				$scope.pageSize = window.sessionStorage.pageSize;
				$scope.pageNumber = window.sessionStorage.pageNumber;
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