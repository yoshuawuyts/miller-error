/**
 * Module dependencies
 */

var miller = require('miller');

/**
 * Export the error validator.
 */

module.exports = miller({
  module: 'string',
  message: 'string',
  statusCode: 'number',
});
