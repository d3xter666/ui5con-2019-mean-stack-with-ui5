(function (global, module) {
	const express = require("express");

	const app = express();
	const PORT = process.env.PORT || "8080";

	//Serve static assets from the webapp folder
	app.use(express.static('./webapp', {
		setHeaders: (res) => {
			res.setHeader("Cache-Control", "public, max-age=2592000");
			res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
		}
	}));

	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}(this, module));