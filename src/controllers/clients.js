const {
	createClientService,
	getClientByIDService,
	updateClientService,
	deleteClientService,
	getAllClientsService,
	getAllVisitsByClientIdService,
	deleteAllVisitsByClientIdService,
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

const getAllVisitsByClientId = async (req, res) => {
	const { clientID } = req.params;

	const visits = await getAllVisitsByClientIdService(clientID, req.query);

	visits
		? res.json({ visits })
		: res.status(404).json({ message: `Visits not found by ID - ${clientID}` });
};

const deleteAllVisitsByClientId = async (req, res) => {
	const { clientID } = req.params;

	const visits = deleteAllVisitsByClientIdService(clientID);

	visits
		? res.json({ visits })
		: res.status(404).json({ message: `Visits not found by ID - ${clientID}` });
};

module.exports = {
	createClient,
	getClientByID,
	updateClient,
	deleteClient,
	getAllClients,
	getAllVisitsByClientId,
	deleteAllVisitsByClientId,
};
