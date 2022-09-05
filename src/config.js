require('dotenv').config();

const { PORT = 3333, DB_URL = '', SECRET_KEY = '' } = process.env;

module.exports = { PORT, DB_URL, SECRET_KEY };
