/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var should = require('should');
var errSchema = require('./index');

/**
 * Test
 */

describe('miller-error()', function() {
  it('should catch errors', function() {
    errSchema.bind(errSchema, {})
      .should.throw;

    errSchema.bind(errSchema, {
      module: 'myModule',
      message: 'a super important message',
      statusCode: 1
    }).should.not.throw;
  });
});
