/**
 * Module dependencies
 */

var miller = require('miller');

/**
 * Export the error validator.
 */

module.exports = miller({
  error: 'object',
  message: 'string',
  statusCode: 'number',
});
