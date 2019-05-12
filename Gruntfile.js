module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({
        ts: {
            default : {
				src: ["./webapp/**/*.ts", "!node_modules/**/*.ts", "!dist**/*.ts"],
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