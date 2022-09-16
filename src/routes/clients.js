const router = require('express').Router();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const wrapper = require('../middleware/wrapper');
const validator = require('../middleware/validator');

const { getClientByID, createClient } = require('../controllers/clients');

const validatorGetById = Joi.object({
	id: Joi.objectId().required(),
});
router.get('/:id', validator.params(validatorGetById), wrapper(getClientByID));

const validatorCreateClient = Joi.object({
	name: Joi.string().required(),
	phone: Joi.string(),
	carBrand: Joi.string(),
	carModel: Joi.string(),
	licensePlate: Joi.string(),
	email: Joi.string().email(),
});
router.post('/', validator.body(validatorCreateClient), wrapper(createClient));

module.exports = router;
