const { createClientService, updateClientService } = require('../services/clients');

const createClient = async (req, res) => {
	const client = await createClientService(req.body);

	res.status(201).json({ client });
};

const updateClient = async (req, res) => {
	const clientID = req.params.id;

	const client = await updateClientService(clientID, req.body);

	res.json({ client });
};

module.exports = { createClient, updateClient };
