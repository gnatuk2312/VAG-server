const Visit = require('../models/visits');

const createVisitService = async (body) => {
	const visit = await Visit.create(body);

	return visit;
};

const getVisitByIDService = async (id) => {
	const visit = await Visit.findById(id);

	return visit;
};

const deleteVisitService = async (id) => {
	const visit = await Visit.findByIdAndDelete(id);

	return visit;
};

const updateVisitService = async (id, body) => {
	const visit = await Visit.findByIdAndUpdate(id, body, { new: true });

	return visit;
};

module.exports = {
	createVisitService,
	getVisitByIDService,
	deleteVisitService,
	updateVisitService,
};
