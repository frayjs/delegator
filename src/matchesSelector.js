'use strict';

var contains = require('./contains');

var matchesSelector = function (element, selector, target) {
  var candidates = [].slice.call(element.querySelectorAll(selector));

  return candidates.some(function (candidate) {
    return contains(candidate, target);
  });
};

module.exports = matchesSelector;
