module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'assets/js/src/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'assets/scss',
          src: ['*.scss'],
          dest: 'assets/css',
          ext: '.css'
        }]
      }
    },
    uglify: {
      options: {
        compress: true,
        beautify: false
      },
      minify_js: {
        files: [
          {
            src: ['assets/js/src/vendor/*.js', 'assets/js/src/*.js'],
            dest: 'assets/js/dist/main.min.js'
          }
        ]
      }
    },
    watch: {
      css: {
        files: ['assets/scss/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['assets/js/src/**/*.js'],
        tasks: ['jshint', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['watch']);

};
