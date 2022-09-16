const { createVisitService } = require('../services/visits');

const createVisit = async (req, res) => {
	const visit = await createVisitService(req.body);

	res.status(201).json({ visit });
};

module.exports = { createVisit };
