import { Router } from 'express';
import user from './routes/user';
import auth from './routes/auth';

const api = Router();

api.get('/', (req, res) => res.send({ ok: true, message: 'Welcome to Andela', status: 'API version 1' }));
api.use('/auth', auth);
api.use('/users', user);
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// No routes matched? 404.
api.use((req, res) => res.status(404).send('Sorry that route/method doesnt exist'));

export default api;
