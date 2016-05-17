/**
 * Example API
 */

var winston = require('winston');

function API(name) {

    this.name = name;

}

/**
 * Return the name
 *
 * @param callback Callback, that is run with the name
 * @return Name
 */

API.prototype.getName = function(callback) {

    winston.debug('In example.getName');

    callback(null, this.name);

};

module.exports = API;
