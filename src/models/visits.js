const { Schema, model } = require('mongoose');

const visitSchema = Schema(
	{
		clientId: {
			type: Schema.Types.ObjectId,
			ref: 'client',
		},
		date: {
			type: String,
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
	},
	{ versionKey: false, timestamps: true },
);

const Visit = model('visit', visitSchema);

module.exports = Visit;
