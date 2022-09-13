const Appointment = require('../models/appointments');

const getAppointmentsByDateService = async (date) => {
	const appointments = await Appointment.find({ date });

	return appointments;
};

const createAppointmentService = async (body) => {
	const appointment = await Appointment.create(body);

	return appointment;
};

module.exports = { getAppointmentsByDateService, createAppointmentService };
