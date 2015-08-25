module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        bitwise: true,
        curly: true,
        eqnull: true,
        eqeqeq: true,
        forin: true,
        undef: true,
        unused: true,
        trailing: true,
        strict : true,
        latedef: true,
        maxparams: 3,
        nonbsp: true,
        nonew: true,
        browser: true,
        jquery: true,
        globals: {
          jQuery: true,
          define: true,
          requirejs: true
        },
        reporter: require('jshint-stylish')
      },
      build: ['scripts/*.js', 'scripts/*/*.js'],
      target: ['file.js']
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "scripts",
          mainConfigFile: "scripts/config.js",
          name: "main",
          out: "js/jquery.interactive-image.min.js",
          useStrict: true
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['scripts/*.js', 'scripts/*/*.js', '!*.min.js', 'css/*.css', '!*.min.css'],
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
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'requirejs', 'cssmin']);
};
