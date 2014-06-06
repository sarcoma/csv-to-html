# grunt-csv-to-html

> Grunt plugin that takes a HTML template, csv data file & compiles HTML

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

`shell
npm install grunt-csv-to-html --save-dev
`

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

`js
grunt.loadNpmTasks('grunt-csv-to-html');
`

## The "csv_to_html" task

### Overview
In your project's Gruntfile, add a section named `csv_to_html` to the data object passed into `grunt.initConfig()`.

    js
    grunt.initConfig({
      csv_to_html: {
        options: {
            rowDelimiter : null,
            delimiter : ',',
            quote : '"',
            escape : '"',
            columns : null,
            comment : '',
            objname : false,
            trim : false,
            ltrim : false,
            rtrim : false,
            auto_parse : false
        },
        your_target: {
          files: {
            'tmp/compiled.html': ['test/fixtures/data.csv', 'test/fixtures/tpl.mustache']
          }
        },
      },
    });

### Options

This plugin uses the excellent wdavidw/node-csv-parse library to parse csv files.
For further reference of options available see: [Parser options](https://github.com/wdavidw/node-csv-parse#parser-options)


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0 Initial release