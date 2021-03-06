(function () {

  'use strict';

  angular
    .module('app.common')
    .factory('CameraFactory', CameraFactory);

  /* @ngInject */
  function CameraFactory($q ,$cordovaCamera) {

    if (window.cordova) {
      var optionsCamera = {
        quality: 70,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        targetWidth: 800,
        targetHeight: 800,
        saveToPhotoAlbum: false,
        correctOrientation: true
      }
    }

    return {
      takePhoto:takePhoto
    };

    function takePhoto() {
      var defer = $q.defer();
      if (window.cordova) {
        $cordovaCamera.getPicture(optionsCamera).then(function (res) {
          defer.resolve(res);

        }, function (err) {
          defer.reject(err);
        });
      }
      else {
        console.log("some error");
      }
      return defer.promise;
    }
  }
}());
