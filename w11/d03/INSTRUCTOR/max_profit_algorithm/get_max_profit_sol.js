var getMaxProfit = function(stockPricesYesterday){
    //make sure we have at least 2 prices
   if(stockPricesYesterday.length < 2){
     return "error! Gettting a profit requires at least 2 prices";
   }
    // we'll greedily update min_price and max_profit, so we initialize
    // them to the first price and the first possible profit
    var minPrice = stockPricesYesterday[0];
    var maxProfit = stockPricesYesterday[1] - minPrice;

    //skip the first time, since we already used it
    // when we initialized min_price and max_profit
    for(var i = 1; i < stockPricesYesterday.length; i++){
    //see what our profit would be if we bought at the
    //min price and sold at the current price
      var potentialProfit = stockPricesYesterday[i] - minPrice;

    //update max_profit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
    //update the minPrice so it's always the lowest
    //we've seen so far
      minPrice = Math.min(stockPricesYesterday[i], minPrice );
    };

   return maxProfit;

};

console.log(getMaxProfit([1]));
