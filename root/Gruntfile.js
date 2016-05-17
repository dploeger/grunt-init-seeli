module.exports = function (grunt) {

    // Project configuration.
    //noinspection JSUnusedGlobalSymbols
    grunt.initConfig(
        {
            // Task configuration.
            eslint: {
                gruntfile: ['Gruntfile.js'],
                lib: ['lib/**/*.js'],
                test: ['test/**/*_test.js'],
                options: {
                    configFile: '.eslintrc'
                }
            },
            nodeunit: {
                files: ['test/**/*_test.js'],
                options: {
                    reporter: 'lcov'
                }
            },
            handlebars: {
                options: {
                    node: true,
                    namespace: 'templates',
                    processName: function (filename) {
                        var names = filename.match(
                            /templates\/([^\.]*)\.handlebars/
                        );
                        if (names) {
                            return names[1];
                        }
                    }
                },
                templates: {
                    files: {'lib/templates.js': ['templates/*.handlebars']}
                }
            },
            watch: {
                gruntfile: {
                    files: '<%= jshint.gruntfile.src %>',
                    tasks: ['jshint:gruntfile']
                },
                'lib_test': {
                    files: '<%= jshint.lib_test.src %>',
                    tasks: ['jshint:lib_test', 'nodeunit']
                }
            }
        }
    );

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('gruntify-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Default task.
    grunt.registerTask('default', ['handlebars']);

    // Test task
    grunt.registerTask(
        'test',
        [
            'eshint',
            'nodeunit',
        ]
    );

};
