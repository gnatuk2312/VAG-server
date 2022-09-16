const { createClientService, deleteClientService } = require('../services/clients');

const createClient = async (req, res) => {
	const client = await createClientService(req.body);

	res.status(201).json({ client });
};

const deleteClient = async (req, res) => {
	const clientID = req.params.id;

	const client = await deleteClientService(clientID);

	client
		? res.json({ client })
		: res.status(404).json({ message: `Client not found by ID - ${clientID}` });
};

module.exports = { createClient, deleteClient };
