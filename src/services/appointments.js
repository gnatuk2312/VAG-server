const Appointment = require('../models/appointments');

const getByDateService = async (date) => {
	const appointments = await Appointment.find({ date });

	return appointments;
};

module.exports = { getByDateService };
