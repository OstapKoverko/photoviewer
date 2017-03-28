app.controller('photoController', function($scope, $routeParams, PhotosService, UpgradeDomService) {
	$scope.loading = true;

	PhotosService.getPhoto($routeParams.id).then(
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