(function (global, module) {
	const {mergeResolvers} = require("merge-graphql-schemas");

	const Record = require("./Record/index");

	const resolvers = [Record];

	module.exports = mergeResolvers(resolvers);
}(this, module));