const router = require('express').Router();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const wrapper = require('../middleware/wrapper');
const validator = require('../middleware/validator');

const { createVisit } = require('../controllers/visits');

const validatorCreateVisit = Joi.object({
	clientId: Joi.objectId().required(),
	date: Joi.date(),
	type: Joi.string(),
	description: Joi.string(),
	price: Joi.number(),
	status: Joi.string(),
});
router.post('/', validator.body(validatorCreateVisit), wrapper(createVisit));

module.exports = router;
