'use strict';

angular.module('eTrade')
.controller('ProfileCtrl', function($scope, Profile){
  $scope.profile = Profile.get();

  $scope.save = function(profile){
    Profile.save(profile);
  };
});
