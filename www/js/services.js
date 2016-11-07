angular.module('starter.services', [])

.factory('ImagesFactory', function($q ,$cordovaCamera) {

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
      alert("Need camera ???");
    }
    return defer.promise;
  }
});
