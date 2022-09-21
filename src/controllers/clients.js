const {
	createClientService,
	getClientByIDService,
	updateClientService,
	deleteClientService,
	getAllClientsService,
} = require('../services/clients');

const createClient = async (req, res) => {
	const client = await createClientService(req.body);

	res.status(201).json({ client });
};

const getClientByID = async (req, res) => {
	const clientID = req.params.id;

	const client = await getClientByIDService(clientID);

	client
		? res.json({ client })
		: res.status(404).json({ message: `Client not found by ID - ${clientID}` });
};

const deleteClient = async (req, res) => {
	const clientID = req.params.id;

	const client = await deleteClientService(clientID);

	client
		? res.json({ client })
		: res.status(404).json({ message: `Client not found by ID - ${clientID}` });
};

const updateClient = async (req, res) => {
	const clientID = req.params.id;

	const client = await updateClientService(clientID, req.body);

	client
		? res.json({ client })
		: res.status(404).json({ message: `Client not found by ID - ${clientID}` });
};

const getAllClients = async (req, res) => {
	const clients = await getAllClientsService(req.query);

	res.json({ clients });
};

module.exports = { createClient, getClientByID, updateClient, deleteClient, getAllClients };
