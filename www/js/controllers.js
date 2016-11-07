angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope, $timeout, ImagesFactory, EmailFactory) {
    $scope.saveImage=function (imageId) {
      var imageUrls=[];
      var doc;
      // ImagesFactory.takePhoto().then(function (response) {
      //imageUrls.push(response)
      // })
      // saveAsPdf.saveImage(imageUrls[i]);

      var image=document.createElement('img');
      image.src="img/test.jpg";
      $timeout(function () {
        doc=saveAsPdf.addImage(image);
        EmailFactory.saveDoc(doc);
        console.log(doc);
      },100);
    };

    $scope.sendEmail=function () {
      EmailFactory.sendEmail();
    }
  })

  .controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
