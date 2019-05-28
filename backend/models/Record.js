import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the Record Schema.
const RecordSchema = new Schema({
	id: {
		type: String,
		required: true,
		unique: true
	},
	avatar: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	job_title: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	company: {
		type: String,
		required: true
	},
	department: {
		type: String,
		required: true
	},
	languages: {
		type: [String],
		required: true
	},
	university: {
		type: String,
		required: true
	},
	self_decription: {
		type: String,
		required: true
	},
	skills: {
		type: [String],
		required: true
	}
});

const Record = mongoose.model("Record", RecordSchema);

export default Record;