const Appointment = require('../models/appointments');

const getAppointmentsByDateService = async (date) => {
	const appointments = await Appointment.find({ date });

	return appointments;
};

const createAppointmentService = async (body) => {
	const appointment = await Appointment.create(body);

	return appointment;
};

const getAllAppointmentsService = async ({ limit = 1, page = 1 }) => {
	const skip = (page - 1) * limit;

	const appointments = await Appointment.aggregate([
		{ $skip: skip },
		{ $limit: limit },
		{
			$group: {
				_id: '$date',
				appointments: { $push: '$$ROOT' },
			},
		},
		{ $sort: { _id: -1 } },
	]);

	return appointments;
};

module.exports = {
	getAppointmentsByDateService,
	createAppointmentService,
	getAllAppointmentsService,
};
