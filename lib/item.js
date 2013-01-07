var Item = function(name, price) {
  this.name = name;
  this.price = price;
  this.getName = function() {return this.name}
}

module.exports = Item;
