var assert = require("assert")
var Counter = require("../lib/number")

describe("Number", function() {
  describe("#isEven()", function() {
    it('should return true when parameter is even number', function() {
      assert.equal(true, (2).isEven());
    });

    it('should return false when parameter is odd number', function() {
      assert.equal(false, (1).isEven());
    });
  });
});
