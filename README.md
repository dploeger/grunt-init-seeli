# Grunt-Init-Seeli - A skeleton for node CLI apps based on seeli and best practices

## Introduction

This template for grunt-init will provide you with a basic setup made for CLI
 apps on Node based on these wonderful frameworks:
 
* [Seeli](https://github.com/esatterwhite/node-seeli)
* [Winston](https://github.com/winstonjs/winston)
* [Handlebars](http://handlebarsjs.com/)
* [Grunt](http://gruntjs.com/)

Also, the .eslintrc from https://github.com/felixge/node-style-guide is taken
to validate your source code.

## Structure

The template is based on a single, executableentry point, that binds one or 
more commands together into a CLI application. All commands are supposed to 
rely on API classes - for clearer separation of concerns and testing purposes.

Output for the applications is provided by Handlebars templates, that are 
compiled into javascript modules using Grunt.

Additionally, Winston is used to provide logging throughout the application. 
Default Arguments for specifying the log level and a reasonable log formatter
 come with the package.

## Usage

First, install grunt-init using npm:

    npm install -g grunt-init

Afterwards, download the release of grunt-init-seeli and put it in ~/
.grunt-init. Now you can simply run

    mkdir my-cli-app
    grunt-init grunt-init-seeli

A small wizard will ask you several questions and create your application.

Afterwards, install the needed dependencies, let Grunt compile the templates 
and you're done:

    npm install
    node_modules/.bin/grunt

Also, you may make your script executable, because it already contains a 
shebang and can thus run directly without "node" prefixed to it:

    chmod +x *.js

## Where to go from here

Have a look at the example command provided in lib/commands/example.js. This 
is a basic setup for each command you like to include.

Note, how the Example API and the Handlebars-templates are used to actually
 do and output something.
 
Check out Seeli and how flags are used to create new commands.

Have fun.
