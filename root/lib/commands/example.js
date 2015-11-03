/**
 * Example command
 */

var cli = require('seeli'),
    merge = require('merge'),
    defaults = require('./defaults'),
    exampleApi = require('../api/example');

function Command (name, data, done) {

    this.name = name;
    this.data = data;
    this.done = done;

    this.exampleApi = new exampleApi(this.data.name);

}

/**
 * Run the real command logic in an OOP way.
 */

Command.prototype.run = function () {

    this.done(null, this.data["additional-param"] + this.exampleApi.getName()); 

}

module.exports = new cli.Command({

    flags: merge(
        {},
        defaults.flags,
        {
            "additional-param": {
                type: String,
                description: "Just an additional parameter"
            }
        }
    ),
    run: function (name, data, done) {
        var command = new Command(name, data, done);
        command.run();        
    }

});
