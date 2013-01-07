var assert = require("assert")
var Calculator = require("../lib/calculator")

describe('Calculator', function() {
  var calc = new Calculator;

  describe('#divide()', function() {
    it('should return 2 when 4 divided by 2', function() {
      assert.equal(2, calc.divide(4, 2));
    });

    it('should throw error when divided by 0', function() {
      assert.throws(function() {
        calc.divide(4, 0);
      }, /IllegalArgumentException/);
    });
  });
});
