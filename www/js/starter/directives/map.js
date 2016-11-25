angular.module('starter.directives.map', [])

.directive('map', function() {

  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function($scope, $element, $attr) {
      function initialize() {
        console.log("map initialize");
        console.log("window.cordova is", typeof(window.cordova));
        if (typeof(window.cordova) != 'undefined') {
          cordova.plugins.diagnostic.isLocationEnabled(
            function(result) {
              if (!result) {
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
        }
        var latLng = new google.maps.LatLng(43.07493, -89.381388);
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
        var gglMap = new google.maps.Map($element[0], mapOpt);
        var gglAnc = new google.maps.Point(16, 0);
        var mapIcon = {
          'url': 'img/blue_dot.png',
          'anchor': gglAnc
        };
        var marker = new google.maps.Marker({
          'icon': mapIcon,
          'map': gglMap,
          'position': latLng,
          'title': 'my location'
        });
        marker = null;
        $scope.onCreate({
          'map': gglMap
        });
        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function(e) {
          e.preventDefault();
          return false;
        });
      }
      if (document.readyState === 'complete') {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }

});
