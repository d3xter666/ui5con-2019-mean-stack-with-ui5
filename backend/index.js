(function (global, module) {
	const express = require("express");
	const expressGraphql = require("express-graphql");
	const mongoose = require("mongoose");
	const bodyParser = require("body-parser");
	const cors = require("cors");
	const schema = require("./graphql/");
	const dataImporter = require("./mock-data/import-data");

	const app = express();
	const PORT = process.env.PORT || "8080";
	const db = process.env.MONGO || "mongodb://localhost:27017/local";

	// Connect to MongoDB with Mongoose.
	mongoose
		.connect(
			db,
			{
				useCreateIndex: true,
				useNewUrlParser: true
			}
		)
		.then(dataImporter)
		.then(() => console.log("Mongo collection loaded"))
		.catch(err => console.log(err));

	app.use(
		"/graphql",
		cors(),
		bodyParser.json(),
		expressGraphql({
			schema,
			graphiql: true
		})
	);

	//Serve static assets from the webapp folder
	app.use(express.static('./dist', {
		setHeaders: (res) => {
			res.setHeader("Cache-Control", "public, max-age=2592000");
			res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
		}
	}));

	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}(this, module));