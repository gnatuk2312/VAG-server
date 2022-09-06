const { Schema, model } = require('mongoose');

const visitSchema = Schema({
	clientId: {
		type: Schema.Types.ObjectId,
		ref: 'Client',
	},
	date: {
		type: Date,
	},
	type: {
		type: String,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
	},
	status: {
		type: String,
	},
});

const Visit = model('visit', visitSchema);

module.exports = {
	Visit,
};
