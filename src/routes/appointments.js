const router = require('express').Router();
const Joi = require('joi');
const { getAppointmentsByDate } = require('../controllers/appointments');
const wrapper = require('../middleware/wrapper');
const validator = require('../middleware/validator');
const { schemaCreateAppointment } = require('../models/appointments');
const { createAppointment } = require('../controllers/appointments');

const validatorGetByDate = Joi.object({
	getByDate: Joi.date().required(),
});
router.get('/:getByDate', validator.params(validatorGetByDate), wrapper(getAppointmentsByDate));

router.post('/', validator.body(schemaCreateAppointment), wrapper(createAppointment));

module.exports = router;
