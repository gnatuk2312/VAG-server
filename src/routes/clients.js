const router = require('express').Router();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const wrapper = require('../middleware/wrapper');
const validator = require('../middleware/validator');

const {
	getClientByID,
	createClient,
	updateClient,
	deleteClient,
} = require('../controllers/clients');

const validatorClientID = Joi.object({
	id: Joi.objectId().required(),
});
router.get('/:id', validator.params(validatorClientID), wrapper(getClientByID));

const validatorCreateClient = Joi.object({
	name: Joi.string().required(),
	phone: Joi.string(),
	carBrand: Joi.string(),
	carModel: Joi.string(),
	licensePlate: Joi.string(),
	email: Joi.string().email(),
});
router.post('/', validator.body(validatorCreateClient), wrapper(createClient));

const validatorUpdateClient = Joi.object({
	name: Joi.string().required(),
	phone: Joi.string(),
	carBrand: Joi.string(),
	carModel: Joi.string(),
	licensePlate: Joi.string(),
	email: Joi.string().email(),
	favorite: Joi.boolean(),
});
router.put(
	'/:id',
	validator.params(validatorClientID),
	validator.body(validatorUpdateClient),
	wrapper(updateClient),
);

router.delete('/:id', validator.params(validatorClientID), wrapper(deleteClient));

module.exports = router;
