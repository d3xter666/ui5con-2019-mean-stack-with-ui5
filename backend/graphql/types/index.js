(function (global, module) {

	const {mergeTypes} = require("merge-graphql-schemas");
	const Record = require("./Record/index");

	const typeDefs = [Record];

	module.exports = mergeTypes(typeDefs, {all: true});
}(this, module));