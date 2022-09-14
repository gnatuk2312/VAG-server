const {
	getAppointmentsByDateService,
	createAppointmentService,
} = require('../services/appointments');

const getAppointmentsByDate = async (req, res) => {
	const date = req.params.getByDate;

	const appointments = await getAppointmentsByDateService(date);

	res.json({ appointments });
};

const createAppointment = async (req, res) => {
	const appointment = await createAppointmentService(req.body);

	res.status(201).json({ appointment });
};

module.exports = { getAppointmentsByDate, createAppointment };
