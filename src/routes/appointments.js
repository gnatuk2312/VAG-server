const router = require('express').Router();
const Joi = require('joi');
const { getAppointmentsByDate } = require('../controllers/appointments');
const wrapper = require('../middleware/wrapper');
const validator = require('../middleware/validator');

const validatorGetByDate = Joi.object({
	getByDate: Joi.date().required(),
});
router.get('/:getByDate', validator.params(validatorGetByDate), wrapper(getAppointmentsByDate));

module.exports = router;
