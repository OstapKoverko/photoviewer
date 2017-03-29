app.controller('photoController', function($scope, $routeParams, LoadDataService, UpgradeDomService) {
	$scope.loading = true;
	$scope.currentAlbumId = window.sessionStorage.currentAlbumId;
	
	LoadDataService.getPhoto($routeParams.id).then(
		function onSuccess(response) {
			$scope.photoErrorMesage = null;
			$scope.photo = response;
			$scope.loading = false;
			debugger;
		},
		function onError(response) {
			console.log(response);
			$scope.photoErrorMesage = response;
			$scope.loading = false;
		}
	);

	UpgradeDomService.upgradeDom();

});