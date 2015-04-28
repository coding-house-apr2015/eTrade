'use strict';

angular.module('eTrade')
.factory('Profile', function($rootScope, $firebaseObject){

  function Profile(){
  }

  Profile.deposit = function(amount){
    if(!$rootScope.afUser.balance){
      $rootScope.afUser.balance = 0;
    }

    $rootScope.afUser.balance += amount;
    return $rootScope.afUser.$save();
  };

  Profile.save = function(profile){
    $rootScope.afUser.profile = profile;
    return $rootScope.afUser.$save();
  };

  return Profile;
});
