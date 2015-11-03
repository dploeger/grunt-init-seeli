/**
 * grunt-init-seeli
 *  
 */

exports.description = "Create a basic seeli-based cli application according to best practices";

exports.after = "Please install all dependencies using _npm install_ and".cyan +
    " compile the templates using _node_modules/.bin/grunt_. We have ".cyan +
    "placed an example command and api to get you started. Afterwards, ".cyan +
    "read the README.md about how to continue from here.".cyan;

exports.template = function (grunt, init, done) {

    init.process(
        {
            type: "node"
        },
        [
            init.prompt("name"),
            init.prompt("description"),
            init.prompt("version"),
            init.prompt("author_name"),
            init.prompt("author_email"),
            init.prompt("licenses")
        ],
        function (err, props) {
       
            var files = init.filesToCopy(props);

            init.addLicenseFiles(files, props.licenses);
            
            init.copyAndProcess(files, props);

            props.dependencies = {
                "seeli": "^0.4.3",
                "winston": "^2.0.1",
                "handlebars": "^4.0.3",
                "merge": "^1.2.0"
            };

            props.devDependencies = {
                "grunt": "^0.4.5",
                "grunt-cli": "^0.1.13",
                "grunt-contrib-handlebars": "^0.11.0",
                "grunt-contrib-jshint": "~0.10.0",
                "grunt-contrib-nodeunit": "~0.4.1",
                "grunt-contrib-watch": "~0.6.1"
            };

            init.writePackageJSON('package.json', props);

            done();

        }
    );

};
