const {
	createVisitService,
	getVisitByIDService,
	deleteVisitService,
	updateVisitService,
} = require('../services/visits');

const createVisit = async (req, res) => {
	const visit = await createVisitService(req.body);

	res.status(201).json({ visit });
};

const getVisitByID = async (req, res) => {
	const visitID = req.params.id;

	const visit = await getVisitByIDService(visitID);

	visit
		? res.json({ visit })
		: res.status(404).json({ message: `Visit not found by ID - ${visitID}` });
};

const deleteVisit = async (req, res) => {
	const visitID = req.params.id;

	const visit = await deleteVisitService(visitID);

	visit
		? res.json({ visit })
		: res.status(404).json({ message: `Visit not found by ID - ${visitID}` });
};

const updateVisit = async (req, res) => {
	const visitID = req.params.id;

	const visit = await updateVisitService(visitID, req.body);

	visit
		? res.json({ visit })
		: res.status(404).json({ message: `Visit not found by ID - ${visitID}` });
};

module.exports = { createVisit, getVisitByID, deleteVisit, updateVisit };
