const Visit = require('../models/visits');

const createVisitService = async (body) => {
	const visit = await Visit.create(body);

	return visit;
};

const getVisitByIDService = async (id) => {
	const visit = await Visit.findById(id);

	return visit;
};

module.exports = { createVisitService, getVisitByIDService };
