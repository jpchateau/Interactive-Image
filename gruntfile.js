module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        "reporter": require('jshint-stylish'),
        jshintrc: true
      },
      build: ['src/js/*.js', '!src/js/wrapper*.js'],
      target: ['file.js']
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "src/js",
          mainConfigFile: "src/js/require-config.js",
          out: "dist/js/jquery.interactive-image.min.js",
          include: ["main"],
          optimize: 'uglify',
          useStrict: true,
          preserveLicenseComments: false,
          paths: {
            'jquery': '../../bower_components/jquery/dist/jquery',
            'almond': '../../bower_components/almond/almond'
          },
          name: 'almond',
          wrap: true,
          insertRequire: ['main']
        }
      }
    },
    cssmin: {
      build: {
        files: {
          'dist/css/interactive-image.min.css': ['src/css/*.css']
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/fonts/', src: ['**'], dest: 'dist/fonts/'}
        ]
      }
    },
    watch: {
      scripts: {
        files: ['src/js', 'src/css'],
        tasks: ['default'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'requirejs', 'cssmin', 'copy']);
};
