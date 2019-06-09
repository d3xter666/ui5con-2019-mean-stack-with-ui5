import express from "express";
import expressGraphql from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import schema from "./graphql/";
import dataImporter from "./mock-data/import-data";

const app = express();
const PORT = process.env.PORT || "8080";
const db = "mongodb://localhost:27017/local";

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
app.use(express.static('./webapp', {
	setHeaders: (res) => {
		res.setHeader("Cache-Control", "public, max-age=2592000");
		res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
	}
}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));