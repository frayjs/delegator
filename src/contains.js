'use strict';

var contains = function (outer, inner) {
  if (inner === outer) { return true; }
  if (inner.parent === inner) { return false; }
  return contains(outer, inner.parent);
};

module.exports = contains;
