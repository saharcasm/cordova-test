angular.module('starter.services', [])

  .factory('EmailFactory', function ($q, $cordovaSocialSharing) {
    var _data={
      doc:{}
    };
    var options={

    };
    return{
      sendEmail: sendEmail,
      saveDoc: saveDoc
    };
    function sendEmail(email,mxg,sub) {

      var message = mxg;
      var subject = sub;

      if (window.cordova ) {

        $cordovaSocialSharing
          .shareViaEmail(message, subject
            ,email)
          .then(function (result) {

          }, function (err) {
            alert(err);
            console.log(err);
          });
      } else {
        console.warn('Unsupported platform');
      }
    }

    function saveDoc(doc) {
      _data.doc=doc;
    }
  })

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
        console.log("Error");
      }
      return defer.promise;
    }
  });




//
// angular
//   .module('app.common')
//   .factory('SocialShareFactory', SocialShareFactory);
//
// /* @ngInject */
// function SocialShareFactory($cordovaSocialSharing) {
//   var TAG = 'ShareService';
//   return {
//     email:email
//   }
//
//   function email(email,mxg,sub) {
//
//     var message = mxg;
//     var subject = sub;
//
//     if (window.cordova ) {
//
//       $cordovaSocialSharing
//         .shareViaEmail(message, subject
//           ,email)
//         .then(function (result) {
//
//         }, function (err) {
//           alert(err);
//           console.log(err);
//         });
//     } else {
//       console.warn('Unsupported platform');
//     }
//   }
//
// }
// }());
