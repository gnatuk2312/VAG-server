const router = require('express').Router();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const wrapper = require('../middleware/wrapper');
const validator = require('../middleware/validator');

const { createVisit, getVisitByID } = require('../controllers/visits');

const validatorCreateVisit = Joi.object({
	clientId: Joi.objectId().required(),
	date: Joi.date(),
	type: Joi.string(),
	description: Joi.string(),
	price: Joi.number(),
	status: Joi.string(),
});
router.post('/', validator.body(validatorCreateVisit), wrapper(createVisit));

const validatorVisitID = Joi.object({
	id: Joi.objectId().required(),
});
router.get('/:id', validator.params(validatorVisitID), wrapper(getVisitByID));

module.exports = router;
