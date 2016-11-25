angular.module('starter.controllers.MapCtrl', [])

.controller('MapCtrl', function($scope, $ionicLoading) {

  $scope.checkLocation = function() {
    console.log("MapCtrl checkLocation");
    console.log("window.cordova is", typeof(window.cordova));
    if (typeof(window.cordova) != 'undefined') {
      cordova.plugins.diagnostic.isLocationEnabled(
        function(result) {
          if (result) {
            $scope.centerOnMe();
          } else {
            alert("Location not turned on!");
            cordova.plugins.diagnostic.switchToLocationSettings();
          }
        },
        function(error) {
          alert("Error " + error);
        }
      );
    } else {
      console.log("window.cordova not detected");
      $scope.centerOnMe();
    }
  }

  $scope.centerOnMe = function() {
    console.log("MapCtrl centerOnMe");
    if (!$scope.map) {
      return;
    }
    $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });
    navigator.geolocation.getCurrentPosition(function(pos) {
      console.log('Got pos', pos);
      var lat = pos.coords.latitude;
      var lng = pos.coords.longitude;
      var latLng = new google.maps.LatLng(lat, lng);
      $scope.map.setCenter(latLng);
      var mapTyp = google.maps.MapTypeId.ROADMAP;
      var mapOpt = {
        'center': latLng,
        'mapTypeId': mapTyp,
        // map or satellite controls
        'mapTypeControl': false,
        // map data scale
        'scaleControl': false,
        'zoom': 17,
        // map zoom controls
        'zoomControl': false
      };
      var gglAnc = new google.maps.Point(16, 0);
      var mapIcon = {
        'url': 'img/blue_dot.png',
        'anchor': gglAnc
      };
      var marker = new google.maps.Marker({
        'icon': mapIcon,
        'map': $scope.map,
        'position': latLng,
        'title': 'my location'
      });
      marker = null;
      $ionicLoading.hide();
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    }, {
      enableHighAccuracy: true
    });
  };

  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

});
