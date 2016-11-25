angular.module('starter.controllers.ChatDetailCtrl', [])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

  $scope.chat = Chats.get($stateParams.chatId);
  $scope.$root.tabsHidden = "tabs-hide";

});
