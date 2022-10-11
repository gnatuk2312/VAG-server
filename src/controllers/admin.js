const { signinService, refreshTokenService } = require('../services/admin');

const signin = async (req, res) => {
	const { body } = req;

	const result = await signinService(body);

	if (!result) return res.status(401).json({ message: 'Login or password is wrong' });

	return res.json(result);
};

const status = (_, res) => {
	res.sendStatus(204);
};

const logout = (_, res) => {
	res.sendStatus(204);
};

const refreshToken = async (req, res) => {
	const { authorization = '' } = req.headers;
	const [bearer, token] = authorization.split(' ');

	if (bearer !== 'Bearer') return res.status(401).json({ message: 'Unauthorized' });

	const accessToken = await refreshTokenService(token);

	if (!accessToken) return res.status(401).json({ message: 'Cannot refresh token.' });

	return res.json({ accessToken });
};

module.exports = { signin, status, logout, refreshToken };
