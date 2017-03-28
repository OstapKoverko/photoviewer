app.directive("pagination", function() {
	return {
		restrict: "E",
		transclude: "true",
		scope: {
			pageSize: "=",
			itemsQuantity: "=",
			onSelectPage: "="
		},
		templateUrl: "app/Pagination/pagination.html",
		controller: ["$scope",
			function ($scope) {
				$scope.$watchGroup(["itemsQuantity", "pageSize"],
					function refresh([itemsQuantity, pageSize]) {
						if(!itemsQuantity)return;
						if(!pageSize)return;
						var pages = [];
						var i = itemsQuantity / pageSize;
						while (i--) {
							pages.unshift(i);
						}
						$scope.pages = pages;
						debugger;
					}
				);
				$scope.selectPage = function (currentPage) {
					$scope.currentPage = currentPage;
					$scope.onSelectPage(currentPage);
				};			
			}
		]
	};
});