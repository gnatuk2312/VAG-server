const Client = require('../models/clients');

const createClientService = async (body) => {
	const client = await Client.create(body);

	return client;
};

const getByIDService = async (id) => {
	const client = await Client.findById(id);

	return client;
};

module.exports = { createClientService, getByIDService };
