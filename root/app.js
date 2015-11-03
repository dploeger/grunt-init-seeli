#!/usr/bin/env node

/**
 * {%= name %}
 * {%= description %}
 */

var cli = require('seeli'),
    exampleCommand = require('./lib/commands/example');

// We want our app to exit when there is an error.

cli.exitOnError = true;

// Add all the available commands

cli.use("example", exampleCommand);

// And go!

cli.run();
