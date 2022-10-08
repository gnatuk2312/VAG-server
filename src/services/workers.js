const Appointment = require('../models/appointments');

const deleteAppointmentsOlderThanTwoMonths = async () => {
	const twoMonthsAgo = new Date().setMonth(new Date().getMonth() - 2);
	await Appointment.deleteMany({ date: { $lte: twoMonthsAgo } });
};

module.exports = deleteAppointmentsOlderThanTwoMonths;
