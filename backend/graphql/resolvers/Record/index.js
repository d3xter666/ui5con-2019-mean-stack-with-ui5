(function (global, module) {

	const records = require("../../../mock-data/data");

	module.exports = {
		Query: {
			record: (root, args) => {
				return new Promise((resolve) => {
					const record = records.filter((curRecord) => curRecord.id === args.id)[0];

					resolve(record);
				});
			},
			records: () => {
				return new Promise((resolve) => {
					resolve(records);
				});
			}
		},
		Mutation: {
			addRecord: (root, args) => {
				const newRecord = args;

				records.push(newRecord);

				return new Promise((resolve) => {
					resolve(newRecord);
				});
			},
			editRecord: (root, args) => {
				return new Promise((resolve) => {
					const record = records.filter((curRecord) => curRecord.id === args.id)[0];

					if (record) {
						Object.keys(args).forEach((key) => {
							record[key] = args[key];
						});
					}

					resolve(record);
				});
			},
			deleteRecord: (root, {id}) => {
				return new Promise((resolve) => {
					const record = records.filter((curRecord) => curRecord.id === id)[0];

					if (record) {
						const index = records.indexOf(record);
						records.splice(index, 1);
					}

					resolve(record);

				});
			}
		}
	};
}(this, module));