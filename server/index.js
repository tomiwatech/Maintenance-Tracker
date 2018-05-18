import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import api from './api';

const PORT = 4444;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

// api versioning;
app.use('/api/v1', api);
app.get('/', (req, res) => res.send({ ok: true, message: 'Welcome to Maintenance Tracker', baseurl: '/api/v1' }).status(200));
app.listen(PORT, () => {
  if (process.env.NODE_ENV === 'dev') {
    /* eslint no-console: 0 */
    console.log(`The Dev server is running on port ${PORT}`);
  } else {
    console.log(`The production server is now running at ${PORT}`);
  }
});

export default app;
