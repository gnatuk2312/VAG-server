const jwt = require('jsonwebtoken');

const { SECRET_KEY, ADMIN_LOGIN } = require('../config');

const auth = async (req, res, next) => {
	try {
		const { authorization = '' } = req.headers;
		const [bearer, token] = authorization.split(' ');

		if (bearer !== 'Bearer') throw Error();

		const { login } = jwt.verify(token, SECRET_KEY);

		if (login !== ADMIN_LOGIN) throw Error();

		next();
	} catch (error) {
		let { status, message } = error;

		if (message === 'jwt expired') {
			message = 'Time of Access Token is expired';
			status = 476;
		} else {
			message = 'Unauthorized';
			status = 401;
		}

		res.status(status).json({ message });
	}
};

module.exports = auth;
