module.exports = function (grunt) {
	"use strict";

	const config = {
		tsconfig: './tsconfig.json'
	};

	grunt.initConfig({
		ts: {
			default: config,
			dev: Object.assign({}, config, {
				watch: './webapp/'
			})
		}
	});

	grunt.loadNpmTasks("grunt-ts");
	grunt.registerTask("default", ["ts"]);
};