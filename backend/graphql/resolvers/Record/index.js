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