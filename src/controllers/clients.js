const { createClientService, getByIDService } = require('../services/clients');

const createClient = async (req, res) => {
	const client = await createClientService(req.body);

	res.status(201).json({ client });
};

const getByID = async (req, res) => {
	const clientID = req.params.id;

	const client = await getByIDService(clientID);

	client
		? res.json({ client })
		: res.status(404).json({ message: `Client not found by ID - ${clientID}` });
};

module.exports = { createClient, getByID };
