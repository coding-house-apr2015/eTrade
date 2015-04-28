'use strict';

angular.module('eTrade')
.factory('Portfolio', function($rootScope){

  function Portfolio(){
  }

  Portfolio.add = function(name){
    var names = $rootScope.afUser.names ? $rootScope.afUser.names.split(',') : [];
    names.push(name);
    $rootScope.afUser.names = names.join(',');
    return $rootScope.afUser.$save();
  };

  return Portfolio;
});
