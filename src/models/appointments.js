const { Schema, model } = require('mongoose');
const Joi = require('joi');

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

const schemaCreateAppointment = Joi.object({
	date: Joi.date().required(),
	hour: Joi.string().required(),
	name: Joi.string().required(),
	phone: Joi.string().required(),
	email: Joi.string().email(),
});

module.exports = {
	Appointment,
	schemaCreateAppointment,
};
