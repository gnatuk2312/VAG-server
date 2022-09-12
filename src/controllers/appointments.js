const { getAppointmentsByDateService } = require('../services/appointments');
const { Appointment } = require('../models/appointments');

const getAppointmentsByDate = async (req, res) => {
	const date = req.params.getByDate;

	const appointments = await getAppointmentsByDateService(date);

	res.json({ appointments });
};

const createAppointment = async (req, res) => {
	const appointment = await Appointment.create(req.body);

	res.status(201).json({ appointment });
};

module.exports = { getAppointmentsByDate, createAppointment };
