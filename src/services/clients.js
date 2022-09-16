const Client = require('../models/clients');

const createClientService = async (body) => {
	const client = await Client.create(body);

	return client;
};

const deleteClientService = async (id) => {
	const client = await Client.findByIdAndDelete(id);

	return client;
};

module.exports = { createClientService, deleteClientService };
