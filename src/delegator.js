'use strict';

var addListener = require('./addListener');

var delegator = function (element) {
  var listeners = {};

  return function (eventType, selector, listener) {
    if (!listeners[eventType]) {
      listeners[eventType] = {};
      addListener(element, eventType, listeners[eventType]);
    }

    var selectors = listeners[eventType];

    if (!selectors[selector]) { selectors[selector] = []; }
    selectors[selector].push(listener);
  };
};

module.exports = delegator;
