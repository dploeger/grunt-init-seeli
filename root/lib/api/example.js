/**
 * Example API
 */

function API(name) {

    this.name = name;

}

/**
 * Return the name
 *
 * @return Name
 */

API.prototype.getName = function() {

    return this.name;

}

module.exports = API;
