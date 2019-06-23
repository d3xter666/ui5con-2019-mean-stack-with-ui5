(function (global, module) {

	const records = require("../../../mock-data/data");

	module.exports = {
		Query: {
			record: (root, args) => {
				return new Promise((resolve, reject) => {
					const record = records.filter((curRecord) => curRecord.id === args.id)[0];

					if (record) {
						resolve(record);
					} else {
						reject("Not found");
					}
				});
			},
			records: () => {
				return new Promise((resolve, reject) => {
					resolve(records);
				});
			}
		},
		Mutation: {
			addRecord: (root, args) => {
				const newRecord = args;

				records.push(newRecord);

				return new Promise((resolve, reject) => {
					resolve(newRecord);
				});
			},
			editRecord: (root, args) => {
				return new Promise((resolve, reject) => {
					const record = records.filter((curRecord) => curRecord.id === args.id)[0];

					if (!record) {
						reject("Not found");
					}

					Object.keys(args).forEach((key) => {
						record[key] = args[key];
					});

					resolve(record);
				});
			},
			deleteRecord: (root, {id}) => {
				return new Promise((resolve, reject) => {
					const record = records.filter((curRecord) => curRecord.id === id)[0];

					if (!record) {
						reject("Not found");
					}

					const index = records.indexOf(record);
					records.splice(index, 1);

					resolve(record);

				});
			}
		}
	};
}(this, module));