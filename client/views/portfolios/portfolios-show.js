'use strict';

angular.module('eTrade')
.controller('PortfoliosShowCtrl', function($scope, $state, Portfolio, Stock){
  $scope.name = $state.params.name;
  $scope.stocks = Portfolio.getStocks($state.params.name);
  $scope.stocks.$watch(computePosition);

  $scope.purchase = function(s){
    var stock = new Stock(s);
    stock.getQuote()
    .then(function(response){
      stock.quote = response.data.LastPrice;
      if(stock.purchase()){
        Portfolio.addStock(stock, $state.params.name).then(clearFields);
      }
    });
  };

  function clearFields(){
    $scope.stock = null;
  }

  function computePosition(){
    $scope.position = $scope.stocks.reduce(function(acc, stock){
      return acc + stock.position;
    }, 0);
  }
});
