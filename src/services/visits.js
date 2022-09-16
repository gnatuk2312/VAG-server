const Visit = require('../models/visits');

const createVisitService = async (body) => {
	const visit = await Visit.create(body);

	return visit;
};

module.exports = { createVisitService };
