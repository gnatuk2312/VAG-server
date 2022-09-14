const router = require('express').Router();
const Joi = require('joi');
const wrapper = require('../middleware/wrapper');
const validator = require('../middleware/validator');

const { createClient } = require('../controllers/clients');

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
