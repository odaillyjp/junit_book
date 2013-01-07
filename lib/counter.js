var Counter = function() {
  this.countValue = 0;
  this.increment = function() {
    return ++this.countValue;
  };
}

module.exports = Counter;
