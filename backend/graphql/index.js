(function (global, module) {
	const {makeExecutableSchema} = require("graphql-tools");

	const typeDefs = require("./types/index");
	const resolvers = require("./resolvers/index");

	const schema = makeExecutableSchema({
		typeDefs,
		resolvers
	});

	module.exports = schema;
}(this, module));