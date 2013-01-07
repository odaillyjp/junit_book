var assert = require("assert")
var StringUtils = require("../lib/string_utils")

describe('StringUtils', function() {
  var strUtils = new StringUtils;

  describe('#toSnakeCase()', function() {
    it('should return "aaa" when parameter is "aaa"', function() {
      assert.equal("aaa", strUtils.toSnakeCase("aaa"));
    });

    it('should return "hello_world" when parameter is "HelloWorld"', function() {
      assert.equal("hello_world", strUtils.toSnakeCase("HelloWorld"));
    });

    it('should return "practice_junit" when parameter is "practiceJunit"', function() {
      assert.equal("practice_junit", strUtils.toSnakeCase("practiceJunit"));
    });
  });
});
