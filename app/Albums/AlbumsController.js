app.controller('albumsController', function($scope, LoadDataService, UpgradeDomService) {
	$scope.loading = true;
	$scope.pageSize = 10;
	$scope.pageNumber = 1;
	$scope.setPageSize = function (pageSize) {
		$scope.pageSize = pageSize;
		$scope.pageNumber = 1;
		getAlbums();
	};
	$scope.onSelectPage = function (pageNumber) {
		$scope.pageNumber = pageNumber;
		getAlbums();
	};

	function getAlbums() {
		LoadDataService.getAlbums($scope.pageSize, $scope.pageNumber).then(
			function onSuccess(response) {
				$scope.albumsErrorMesage = null;
				$scope.albums = response.albums;
				$scope.albumsQuantity = response.albumsQuantity;
				$scope.loading = false;
				debugger;
			},
			function onError(response) {
				console.log(response);
				$scope.albumsErrorMesage = response;
				$scope.loading = false;
			}
		);
	}

	getAlbums();
	UpgradeDomService.upgradeDom();

});