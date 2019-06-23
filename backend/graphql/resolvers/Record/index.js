(function (global, module) {

	// The Record schema.
	const Record = require("../../../models/Record");

	module.exports = {
		Query: {
			record: (root, args) => {
				return new Promise((resolve, reject) => {
					Record.findOne(args).exec((err, res) => {
						err ? reject(err) : resolve(res);
					});
				});
			},
			records: () => {
				return new Promise((resolve, reject) => {
					Record.find({}, null, {sort: {id: -1}})
						.populate()
						.exec((err, res) => {
							err ? reject(err) : resolve(res);
						});
				});
			}
		},
		Mutation: {
			addRecord: (root, args) => {
				const newRecord = new Record(args);

				return new Promise((resolve, reject) => {
					newRecord.save((err, res) => {
						err ? reject(err) : resolve(res);
					});
				});
			},
			editRecord: (root, args) => {
				return new Promise((resolve, reject) => {
					Record.findOneAndUpdate({id: args.id}, {$set: args}, {new: true}).exec(
						(err, res) => {
							err ? reject(err) : resolve(res);
						}
					);
				});
			},
			deleteRecord: (root, {id}) => {
				return new Promise((resolve, reject) => {
					Record.findOneAndRemove({id: id}).exec((err, res) => {
						err ? reject(err) : resolve(res);
					});
				});
			}
		}
	};
}(this, module));