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

const deleteClientService = async (id) => {
	const client = await Client.findByIdAndDelete(id);

	return client;
};

const getAllClientsService = async ({ limit = 1, page = 1, filter }) => {
	const skip = (page - 1) * limit;

	if (filter) {
		const [field, value] = filter.split('|');

		const clients = await Client.find({ [field]: { $regex: new RegExp(value, 'i') } })
			.skip(skip)
			.limit(limit);

		return clients;
	}

	const clients = await Client.find().skip(skip).limit(limit);

	return clients;
};

module.exports = {
	createClientService,
	getClientByIDService,
	updateClientService,
	deleteClientService,
	getAllClientsService,
};
