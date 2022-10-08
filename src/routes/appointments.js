const router = require('express').Router();
const Joi = require('joi');
const wrapper = require('../middleware/wrapper');
const validator = require('../middleware/validator');

const {
	getAllAppointments,
	getAppointmentsByDate,
	createAppointment,
} = require('../controllers/appointments');
const auth = require('../middleware/authorization');

const validatorGet = Joi.object({
	limit: Joi.number(),
	page: Joi.number(),
});
router.get('/', validator.query(validatorGet), auth, wrapper(getAllAppointments));

const validatorGetByDate = Joi.object({
	getByDate: Joi.date().required(),
});
router.get('/:getByDate', validator.params(validatorGetByDate), wrapper(getAppointmentsByDate));

const validatorCreateAppointment = Joi.object({
	date: Joi.date().required(),
	hour: Joi.string().required(),
	name: Joi.string().required(),
	phone: Joi.string().required(),
	email: Joi.string().email(),
});
router.post('/', validator.body(validatorCreateAppointment), wrapper(createAppointment));

module.exports = router;
