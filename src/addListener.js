'use strict';

var matchesSelector = require('./matchesSelector');

var addListener = function (element, eventType, selectors) {
  var listener = function (event) {
    Object.keys(selectors)
    .filter(function (selector) {
      return matchesSelector(event.target, selector);
    })
    .reduce(function (acc, selector) {
      return acc.concat(selectors[selector]);
    }, [])
    .forEach(function (listener) {
      listener(event);
    });
  };

  element.addEventListener(eventType, listener);
};

module.exports = addListener;
