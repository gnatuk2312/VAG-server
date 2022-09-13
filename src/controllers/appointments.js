const { getAppointmentsByDateService } = require('../services/appointments');

const getAppointmentsByDate = async (req, res) => {
	const date = req.params.getByDate;

	const appointments = await getAppointmentsByDateService(date);

	res.json({ appointments });
};

module.exports = { getAppointmentsByDate };
