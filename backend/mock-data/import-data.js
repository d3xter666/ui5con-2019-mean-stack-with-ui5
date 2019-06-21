(function (global, module) {
	const Record = require("../models/Record");
	const mockData = require("./data");

	module.exports = new Promise((resolve, reject) => {
		Record.findOne({}).exec((err, res) => {
			!res ? reject(err) : resolve(res);
		});
	}).then(() => {
		console.log("There's already import data. Skipping import...");
	}, () => {
		return Record.collection.insertMany(mockData)
			.then(() => console.log("Data imported"));
	});
}(this, module));