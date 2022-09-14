const { createClientService } = require('../services/clients');

const createClient = async (req, res) => {
	const client = await createClientService(req.body);

	res.status(201).json({ client });
};

module.exports = { createClient };
