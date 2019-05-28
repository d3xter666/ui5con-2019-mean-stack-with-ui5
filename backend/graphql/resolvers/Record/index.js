// The Record schema.
import Record from "../../../models/Record";

export default {
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
				Record.find({})
					.populate()
					.exec((err, res) => {
						err ? reject(err) : resolve(res);
					});
			});
		}
	},
	Mutation: {
		addRecord: (root, {id, name, email}) => {
			const newRecord = new Record({id, name, email});

			return new Promise((resolve, reject) => {
				newRecord.save((err, res) => {
					err ? reject(err) : resolve(res);
				});
			});
		},
		editRecord: (root, {id, name, email}) => {
			return new Promise((resolve, reject) => {
				Record.findOneAndUpdate({id}, {$set: {name, email}}).exec(
					(err, res) => {
						err ? reject(err) : resolve(res);
					}
				);
			});
		},
		deleteRecord: (root, args) => {
			return new Promise((resolve, reject) => {
				Record.findOneAndRemove(args).exec((err, res) => {
					err ? reject(err) : resolve(res);
				});
			});
		}
	}
};