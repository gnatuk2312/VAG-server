const validationBody = (schema) => async (req, _, next) => {
	try {
		await schema.validateAsync(req.body);
		next();
	} catch (error) {
		error.status = 400;
		next(error);
	}
};

module.exports = { validationBody };
