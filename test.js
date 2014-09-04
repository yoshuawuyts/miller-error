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
      error: {},
      message: 'a super important message',
      statusCode: 1
    }).should.not.throw;
  });

  it('should return an object', function() {
    var obj = errSchema({
      error: new Error('super duper'),
      message: 'a super important message',
      statusCode: 1
    });
    obj.should.be.of.type('object');
  })

  it('should handle error object', function() {
    errSchema.bind(errSchema, {
      error: new Error('super duper'),
      message: 'a super important message',
      statusCode: 1
    }).should.not.throw;
  });


});
