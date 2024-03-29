/* eslint-disable no-unused-vars */
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cron = require('node-cron');

const appointmentsRouter = require('./routes/appointments');
const clientsRouter = require('./routes/clients');
const visitsRouter = require('./routes/visits');
const deleteAppointmentsOlderThanTwoMonths = require('./services/workers');
const adminRouter = require('./routes/admin');

const auth = require('./middleware/authorization');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/appointments', appointmentsRouter);
app.use('/api/clients', auth, clientsRouter);
app.use('/api/visits', auth, visitsRouter);
app.use('/api/admin', adminRouter);

cron.schedule('0 0 * * *', deleteAppointmentsOlderThanTwoMonths);

app.use((_, res) => {
	res.status(404).json({ message: 'Not found' });
});

app.use((err, _, res, __) => {
	const { status = 500, message = 'Internal Server Error' } = err;

	res.status(status).json({ message });
});

module.exports = app;
