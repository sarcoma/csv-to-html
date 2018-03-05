# grunt-csv-to-html

This is a fork of https://github.com/bencooling/csv-to-html that I've hacked about to create one file for each row of the csv file.

I needed to merge a load of email signature data in to a template. This does the job.

## Getting Started
This plugin requires Grunt `~0.4.5`

### Overview
In your project's Gruntfile, add a section named `csv_to_html_files` to the data object passed into `grunt.initConfig()`.

    grunt.initConfig({
      csv_to_html_files: {
        your_target: {
          files: {
            'tmp/compiled.html': ['test/fixtures/data.csv', 'test/fixtures/tpl.html']
          }
        },
      },
    });
