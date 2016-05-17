/**
 * Example command
 */

var cli = require('seeli'),
    merge = require('merge'),
    defaults = require('./defaults'),
    ExampleApi = require('../api/example'),
    templates = require('../templates'),
    util = require('util'),
    winston = require('winston');

function Command(name, data, done) {

    this.name = name;
    this.data = data;
    this.done = done;

    this.exampleApi = new ExampleApi(this.data.name);

}

/**
 * Run the real command logic in an OOP way.
 */

Command.prototype.run = function () {

    var that = this;

    // Don't do anything here, let the API take over.

    this.exampleApi.getName(function (err, data) {

        if (err) {

            winston.error(err.message);

            // We have an error. Give that over to seeli

            that.done(err);
            return;

        }

        // Create a context for the template

        winston.debug('Creating context for template');

        var context = {
            'example': util.format(
                '%s - %s',
                that.data['additional-param'],
                data
            )
        };

        // Render the output using the template

        winston.debug('Rendering template');

        that.done(null, templates.example(context));

    });

};

module.exports = new cli.Command({

    // We merge the default flags with our special flags

    flags: merge(
        {},
        defaults.flags,
        {
            'additional-param': {
                type: String,
                description: 'Just an additional parameter'
            }
        }
    ),
    run: function (name, data, done) {

        // We're using an object here to be ready for complex commands

        winston.debug('Running %s', name);

        var command = new Command(name, data, done);
        command.run();
    }

});
