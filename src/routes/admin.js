const router = require('express').Router();
const Joi = require('joi');
const wrapper = require('../middleware/wrapper');
const validator = require('../middleware/validator');
const auth = require('../middleware/authorization');

const { signin, status, logout, refreshToken } = require('../controllers/admin');

const signinSchemaBody = Joi.object({
	login: Joi.string().required(),
	password: Joi.string().required(),
});
router.post('/signin', validator.body(signinSchemaBody), wrapper(signin));

router.get('/status', auth, wrapper(status));

router.post('/logout', auth, wrapper(logout));

router.post('/refreshToken', wrapper(refreshToken));

module.exports = router;
