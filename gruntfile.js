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
          jQuery: true
        }
      },
      build: ['js/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
