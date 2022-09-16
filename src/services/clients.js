const Client = require('../models/clients');

const createClientService = async (body) => {
	const client = await Client.create(body);

	return client;
};

const getClientByIDService = async (id) => {
	const client = await Client.findById(id);

	return client;
};

const updateClientService = async (id, body) => {
	const client = await Client.findByIdAndUpdate(id, body, { new: true });

	return client;
};

module.exports = { createClientService, getClientByIDService, updateClientService };
