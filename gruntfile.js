module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      "curly": true,
      "eqnull": true,
      "eqeqeq": true,
      "undef": true,
      "globals": {
        "jQuery": true
      },
      all: ['js/*.js']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
};
