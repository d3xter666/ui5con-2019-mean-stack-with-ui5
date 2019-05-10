import express from "express";
import express_graphql from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import schema from "./graphql/";

const app = express();
const PORT = process.env.PORT || "4000";
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
	.then(() => console.log("MongoDB connected"))
	.catch(err => console.log(err));

app.use(
	"/graphql",
	cors(),
	bodyParser.json(),
	express_graphql({
		schema,
		graphiql: true
	})
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));