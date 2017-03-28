app.service('PhotosService', function($http, $q) { 
	
	this.getAlbums = function (pageSize, pageNumber) {
		var deferred = $q.defer();
		$http.get("https://jsonplaceholder.typicode.com/albums").then(
			function onSuccess(response) {
				deferred.resolve ({
					albumsQuantity: response.data.length,
					albums: response.data.splice((pageNumber * pageSize) - pageSize, pageSize)
				});
				debugger;
			} ,
			function onError(response) {
				deferred.reject("GetAlbums method's status: " + response.status + " " + response.statusText);
			}
		);
		return deferred.promise;
	};
	
	this.getPhotosByAlbumId = function (pageSize, pageNumber, id) {
		var deferred = $q.defer();
		$http.get("https://jsonplaceholder.typicode.com/photos?albumId=" + id).then(
			function onSuccess(response) {
				deferred.resolve ({
					photosQuantity: response.data.length,
					photos: response.data.splice((pageNumber * pageSize) - pageSize, pageSize)
				});
				debugger;
			} ,
			function onError(response) {
				deferred.reject("GetPhotosById method's status: " + response.status + " " + response.statusText);
			}
		);
		return deferred.promise;
	};  
	
	this.getPhoto = function (id) {
		var deferred = $q.defer();
		$http.get("https://jsonplaceholder.typicode.com/photos/" + id).then(
			function onSuccess(response) {
				deferred.resolve (response.data);
				debugger;
			} ,
			function onError(response) {
				deferred.reject("GetPhotosById method's status: " + response.status + " " + response.statusText);
			}
		);
		return deferred.promise;
	};  
	
});