const { Schema, model } = require('mongoose');

const clientSchema = Schema(
	{
		name: {
			type: String,
		},
		phone: {
			type: String,
		},
		carBrand: {
			type: String,
		},
		carModel: {
			type: String,
		},
		licensePlate: {
			type: String,
		},
		email: {
			type: String,
		},
		favorite: {
			type: Boolean,
			default: false,
		},
	},
	{ versionKey: false, timestamps: true },
);

const Client = model('client', clientSchema);

module.exports = Client;
