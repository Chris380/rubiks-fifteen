module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			example: {
				port: 1337,
				base: '.'
			}
		},
		open: {
			dev: {
				path: 'http://localhost:1337/app/'
			}
		},
		tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
                src: [
                    "app/src/*.ts",
										"app/src/controllers/*.ts",
										"app/src/config/*.ts",
										"app/components/**/*.ts",
                ]
            }
      }
	});

	grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks("grunt-tslint");

	grunt.registerTask('run', ['open', 'connect']);
	grunt.registerTask('default', ['run']);
};
