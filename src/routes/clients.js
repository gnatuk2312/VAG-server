const router = require('express').Router();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const wrapper = require('../middleware/wrapper');
const validator = require('../middleware/validator');

const { createClient, deleteClient } = require('../controllers/clients');

const validatorCreateClient = Joi.object({
	name: Joi.string().required(),
	phone: Joi.string(),
	carBrand: Joi.string(),
	carModel: Joi.string(),
	licensePlate: Joi.string(),
	email: Joi.string().email(),
});
router.post('/', validator.body(validatorCreateClient), wrapper(createClient));

const validatorClientID = Joi.object({
	id: Joi.objectId().required(),
});
router.delete('/:id', validator.params(validatorClientID), wrapper(deleteClient));

module.exports = router;
