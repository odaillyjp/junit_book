var assert = require("assert")
var Item = require("../lib/item")
var ItemStock = require("../lib/item_stock")

describe("ItemStock", function() {
  var stock;
  var book;
  var bike;

  context("when stock is empty", function() {
    before(function() {
      book = new Item('book', 100);
      stock = new ItemStock;
    });

    describe("#getNum()", function() {
      it('should return 0', function() {
        assert.equal(0, stock.getNum(book));
      });

      it('should return 1 when add item', function() {
        stock.add(book);
        assert.equal(1, stock.getNum(book));
      });
    });
  });

  context("when stock is 1", function() {
    before(function() {
      book = new Item('book', 100);
      stock = new ItemStock;
      stock.add(book);
    });

    it('should return 1', function() {
      assert.equal(1, stock.getNum(book));
    });

    it('should return 2 when add same item', function() {
      stock.add(book);
      assert.equal(2, stock.getNum(book));
    });

    it('should return 1 when add other item', function() {
      bike = new Item('bike', 200);
      stock.add(bike);
      assert.equal(1, stock.getNum(bike));
    });
  });
});
