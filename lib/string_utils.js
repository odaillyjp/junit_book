var StringUtils;

StringUtils = (function() {
  StringUtils.prototype.toSnakeCase = function(text) {
    text = text.replace(/([^^])([A-Z])/g, "$1_$2");
    text = text.toLowerCase();
    return text;
  };
});

module.exports = StringUtils;
