// require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

// module.exports = function(grunt) {
//   grunt.initConfig ({
//     watch: {
//       source: {
//         files: ['sass/**/*.scss'],
//         tasks: ['sass'],
//         options: {
//           livereload: true // needed to run LiveReload
//         }
//       }
//     },
//     sass: {
//       options: {
//         sourceMap: true
//       },
//       dist: {
//         files: {
//           'public/stylesheets/style.css' : 'sass/style.scss'
//         }
//       }
//     }

//   grunt.loadNpmTasks('grunt-contrib-watch');
//   grunt.loadNpmTasks('grunt-sass');
//   grunt.registerTask('default', ['watch']);
//   grunt.registerTask('default', ['sass']);
// });
// }

module.exports = function(grunt) {
  grunt.initConfig ({
    watch: {
      source: {
        files: ['sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    },
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css' : 'sass/style.scss'
        }
      }
    }

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
});
}