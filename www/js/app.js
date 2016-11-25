angular.module(
  'starter', [
    'ionic',
    'starter.controllers.AccountCtrl',
    'starter.controllers.AppCtrl',
    'starter.controllers.ChatDetailCtrl',
    'starter.controllers.ChatsCtrl',
    'starter.controllers.DashCtrl',
    'starter.controllers.MapCtrl',
    'starter.controllers.PlaylistCtrl',
    'starter.controllers.PlaylistsCtrl',
    'starter.controllers.SearchCtrl',
    'starter.directives.map',
    'starter.services.Chats'
  ]
)

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider) {
  // place tab at the bottom page
  $ionicConfigProvider.tabs.position('bottom');
})

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/app/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.browse', {
    url: '/browse',
    views: {
      'app-home': {
        templateUrl: 'templates/app/browse.html'
      }
    }
  })

  .state('app.playlists', {
    url: '/playlists',
    views: {
      'app-home': {
        templateUrl: 'templates/app/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.playlist', {
    url: '/playlists/:playlistId',
    views: {
      'app-home': {
        templateUrl: 'templates/app/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'app-home': {
        templateUrl: 'templates/app/search.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'app-home': {
        templateUrl: 'templates/app/browse.html'
      }
    }
  })

  .state('app.dash', {
    url: '/dash',
    views: {
      'app-dash': {
        templateUrl: 'templates/tab/dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('app.chats', {
    url: '/chats',
    views: {
      'app-chats': {
        templateUrl: 'templates/tab/chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })

  .state('app.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'app-chats': {
        templateUrl: 'templates/tab/chatdetail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })

  .state('app.account', {
    url: '/account',
    views: {
      'app-account': {
        templateUrl: 'templates/tab/account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('app.map', {
    url: '/map',
    views: {
      'app-map': {
        templateUrl: 'templates/tab/map.html',
        controller: 'MapCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
