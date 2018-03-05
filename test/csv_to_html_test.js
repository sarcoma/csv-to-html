'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.csv_to_html = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  example: function(test) {
    test.expect(2);

    var actual_one = grunt.file.read('tmp/compiled_0.html');
    var expected_one = grunt.file.read('test/expected/compiled_0.html');
    var actual_two = grunt.file.read('tmp/compiled_1.html');
    var expected_two = grunt.file.read('test/expected/compiled_1.html');
    test.equal(actual_one, expected_one, 'html compiled with mustache & data provided by csv.');
    test.equal(actual_two, expected_two, 'html compiled with mustache & data provided by csv.');

    test.done();
  }
};
