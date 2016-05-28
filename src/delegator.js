'use strict';

var matchesSelector = require('./matchesSelector');

var addEventListener = function (element, eventType, selectors) {
  element.addEventListener(eventType, function (event) {
    Object.keys(selectors).filter(function (selector) {
      return matchesSelector(element, selector, event.target);
    }).forEach(function (selector) {
      selectors[selector](event);
    });
  });
};

var delegator = function (element) {
  var listeners = {};

  return function (eventType, selector, listener) {
    if (!listeners[eventType]) {
      listeners[eventType] = {};
      addEventListener(element, eventType, listeners[eventType]);
    }

    var selectors = listeners[eventType];

    if (!selectors[selector]) { selectors[selector] = []; }
    selectors[selector].push(listener);
  };
};

module.exports = delegator;
