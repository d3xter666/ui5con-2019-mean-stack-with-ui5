import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the Record Schema.
const RecordSchema = new Schema({
	id: {
		type: Number,
		required: true,
		unique: true
	},
	avatar: {
		type: String
	},
	title: {
		type: String
	},
	first_name: {
		type: String
	},
	last_name: {
		type: String
	},
	job_title: {
		type: String
	},
	email: {
		type: String
	},
	company: {
		type: String
	},
	department: {
		type: String
	},
	languages: {
		type: [String]
	},
	university: {
		type: String
	},
	self_decription: {
		type: String
	},
	skills: {
		type: [String]
	}
});

const Record = mongoose.model("Record", RecordSchema);

export default Record;