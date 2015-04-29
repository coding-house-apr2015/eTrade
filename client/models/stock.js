'use strict';

angular.module('eTrade')
.factory('Stock', function($http, $rootScope){

  function Stock(o){
    this.symbol = o.symbol.toUpperCase();
    this.quantity = o.quantity;
  }

  Stock.prototype.getQuote = function(){
    return $http.jsonp('http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + this.symbol + '&callback=JSON_CALLBACK');
  };

  Stock.prototype.purchase = function(){
    var total = this.quote * this.quantity;
    if(total <= $rootScope.afUser.balance){
      $rootScope.afUser.balance -= total;
      $rootScope.afUser.$save();
      this.position = total;
      return true;
    }
  };

  return Stock;
});
