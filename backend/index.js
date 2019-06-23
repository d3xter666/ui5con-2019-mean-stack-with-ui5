(function (global, module) {
	const express = require("express");
	const expressGraphql = require("express-graphql");
	const bodyParser = require("body-parser");
	const cors = require("cors");
	const schema = require("./graphql/index");

	const app = express();
	const PORT = process.env.PORT || "8080";

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
	app.use(express.static('./webapp', {
		setHeaders: (res) => {
			res.setHeader("Cache-Control", "public, max-age=2592000");
			res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
		}
	}));

	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}(this, module));