'use strict';

var contains = function (outer, inner) {
  if (inner === outer) { return true; }
  if (!inner.parentElement) { return false; }
  return contains(outer, inner.parentElement);
};

module.exports = contains;
