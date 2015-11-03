/** Common errors */

module.exports = {
    systemError: function (message) {

        if (!message) {
            message = "Global system error";
        }

        var e = new Error(message);
        e.code = 255;

        return e;

    }
}
