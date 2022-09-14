const {
	getAppointmentsByDateService,
	createAppointmentService,
	getAllAppointmentsService,
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

const getAllAppointments = async (req, res) => {
	const appointments = await getAllAppointmentsService(req.query);

	res.json({ appointments });
};

module.exports = { getAppointmentsByDate, createAppointment, getAllAppointments };
