// Ccre.js
import 'core-js/es6';
import 'core-js/es7/reflect';

// Zone.js
require('zone.js/dist/zone');

// Typescript emit helpers polyfill
import 'ts-helpers';

if ('production' !== ENV) {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}

