'use strict';

var contains = require('./contains');
var document = require('global/document');

var matchesSelector = function (element, selector) {
  var candidates = [].slice.call(document.querySelectorAll(selector));

  return candidates.some(function (candidate) {
    return contains(candidate, element);
  });
};

module.exports = matchesSelector;
