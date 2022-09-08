const { Schema, model } = require('mongoose');

const appointmentSchema = Schema(
	{
		date: {
			type: Date,
		},
		hour: {
			type: String,
		},
		name: {
			type: String,
		},
		phone: {
			type: String,
		},
		email: {
			type: String,
		},
	},
	{ versionKey: false, timestamps: true },
);

const Appointment = model('appointment', appointmentSchema);

module.exports = Appointment;
