var ItemStock = function() {
  var stock = {};
  this.add = function(item) {
    var name = item.getName();
    var num = 0;
    for (var stockName in stock) {
      if (stockName == name) {
        num = stock[name];
      }
    }
    num++;
    stock[name] = num;
    return true;
  }
  this.getNum = function(item) {
    var name = item.getName();
    var num = stock[name];
    if (!(num)) {num = 0;}
    return num;
  }
}

module.exports = ItemStock;
