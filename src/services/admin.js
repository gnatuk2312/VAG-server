const jwt = require('jsonwebtoken');
const { ADMIN_LOGIN, ADMIN_PASSWORD, SECRET_KEY } = require('../config');

const signinService = async ({ password, login }) => {
	const checkedLogin = login === ADMIN_LOGIN;
	const checkedPassword = password === ADMIN_PASSWORD;

	if (!checkedLogin || !checkedPassword) return null;

	const payload = { login };

	const accessToken = await jwt.sign(payload, SECRET_KEY, { expiresIn: '1m' });
	const refreshToken = await jwt.sign(payload, SECRET_KEY, { expiresIn: '30d' });

	return { accessToken, refreshToken };
};

const refreshTokenService = async (token) => {
	try {
		const { login } = jwt.verify(token, SECRET_KEY);

		if (login !== ADMIN_LOGIN) return null;

		const payload = { login };

		const accessToken = await jwt.sign(payload, SECRET_KEY, { expiresIn: '1m' });

		return accessToken;
	} catch {
		return null;
	}
};

module.exports = { signinService, refreshTokenService };
