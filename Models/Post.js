import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PostSchema = Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
});

export default model("Posts_m", PostSchema);
