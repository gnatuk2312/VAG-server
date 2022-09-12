const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const routerAppointments = require('./routes/appointments');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/appointments', routerAppointments);

app.use((_, res) => {
	res.status(404).json({ message: 'Not found' });
});

app.use((err, _, res) => {
	const { status = 500, message = 'Internal Server Error' } = err;

	res.status(status).json(message);
});

module.exports = app;
