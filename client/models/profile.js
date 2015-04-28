'use strict';

angular.module('eTrade')
.factory('Profile', function($rootScope, $firebaseObject){

  function Profile(){
  }

  Profile.get = function(){
    var fbProfile = $rootScope.fbUser.child('profile');
    return $firebaseObject(fbProfile);
  };

  Profile.save = function(profile){
    $rootScope.afUser.profile = profile;
    return $rootScope.afUser.$save();
  };

  return Profile;
});
