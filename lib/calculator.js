var Calculator;

Calculator = (function() {
  Calculator.prototype.divide = function(x, y) {
    if (y == 0) throw Error("IllegalArgumentException");
    return x / y;
  };
});

module.exports = Calculator;
