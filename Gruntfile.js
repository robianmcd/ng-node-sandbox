module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['**/*.scss'],
                tasks: ['compass']
            }
        },

        compass: {
            compile: {
                options: {
                    sassDir: 'public/stylesheets/sass',
                    cssDir: 'public/stylesheets/css'
                }
            }
        }

    });

    grunt.registerTask('default', ['watch']);

};