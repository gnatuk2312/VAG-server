require('dotenv').config();

const {
	PORT = 3333,
	DB_URL = '',
	SECRET_KEY = '',
	ADMIN_LOGIN = '',
	ADMIN_PASSWORD = '',
} = process.env;

module.exports = { PORT, DB_URL, SECRET_KEY, ADMIN_LOGIN, ADMIN_PASSWORD };
