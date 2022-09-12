const router = require('express').Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const { getByDate } = require('../controllers/appointments');
const wrapper = require('../middleware/wrapper');

const validatorGetByDate = Joi.object({
	getByDate: Joi.date().required(),
});
router.get('/:getByDate', validator.params(validatorGetByDate), wrapper(getByDate));

module.exports = router;
