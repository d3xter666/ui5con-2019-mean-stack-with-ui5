module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({
        ts: {
            default : {
				src: ["**/*.ts", "!node_modules/**/*.ts"],
				options: {
					allowJs: false
				},
				watch: "."
			}

        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
};