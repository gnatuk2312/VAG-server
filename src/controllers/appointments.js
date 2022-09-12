const { getByDateService } = require('../services/appointments');

const getByDate = async (req, res) => {
	const date = req.params.getByDate;

	const appointments = await getByDateService(date);

	res.json({ appointments });
};

module.exports = { getByDate };
