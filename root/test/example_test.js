/**
 * Test Example command
 */

module.exports = {

    /**
     * Setup the test
     *
     * @param callback Test to run after setting things up
     */

    setUp: function (callback) {

        callback();

    },

    testExample: function (test) {

        test.ok(true);
        test.done();

    }

}
