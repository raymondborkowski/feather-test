/**
 * Run tests and view output
 */

var featherTest = require('../index.js');

console.log('\n\n########## Should Pass ##########');
global.wrongValue = null;
featherTest.unqueue();
featherTest.queue('./features');

featherTest.run(function () {
    console.log('\n\n########## Should Fail ##########');
    global.wrongValue = 666;
    featherTest.unqueue();
    featherTest.queue('./features');

    featherTest.run(function () {
        console.log('\n\n########## Should Time Out ##########');
        featherTest.options.timeout = 500;
        featherTest.unqueue();
        featherTest.queue('./timeout');

        featherTest.run();
    });
});
