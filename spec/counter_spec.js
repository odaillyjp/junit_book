var assert = require("assert")
var Counter = require("../lib/counter")

describe("Counter", function() {
  var cnt = null;

  context("when value is 0", function() {
    before(function() {
      cnt = new Counter;
    });

    describe("#increment()", function() {
      it('should return 1', function() {
        assert.equal(1, cnt.increment());
      });
    });
  });

  context("when value is 1", function() {
    before(function() {
      cnt = new Counter;
      cnt.increment();
    });

    describe("#increment()", function() {
      it('should return 2', function() {
        assert.equal(2, cnt.increment());
      });
    });
  });

  context("when value is 50", function() {
    before(function() {
      cnt = new Counter;
      for (var i = 0; i < 50; i++) {cnt.increment();}
    });

    describe("#increment()", function() {
      it('should return 51', function() {
        assert.equal(51, cnt.increment());
      });
    });
  });
});
