var app = window.angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider  
  .when("/", {
    templateUrl : "app/Albums/albums.html",
    controller : "albumsController"
  }) 
  .when("/albums", {
    templateUrl : "app/Albums/albums.html",
    controller : "albumsController"
  })  
  .when("/albums/:id", {
    templateUrl : "app/Photos/photos.html",
    controller : "photosController"
  })
   .when("/photos/:id", {
    templateUrl : "app/Photos/photo.html",
    controller : "photoController"
  });
});