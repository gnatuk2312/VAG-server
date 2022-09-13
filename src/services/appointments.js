const Appointment = require('../models/appointments');

const getAppointmentsByDateService = async (date) => {
	const appointments = await Appointment.find({ date });

	return appointments;
};

module.exports = { getAppointmentsByDateService };
