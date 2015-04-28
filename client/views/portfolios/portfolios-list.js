'use strict';

angular.module('eTrade')
.controller('PortfoliosListCtrl', function($scope){
  $scope.afUser.$loaded(function(){
    $scope.names = $scope.afUser.names ? $scope.afUser.names.split(',') : [];
  });
});
