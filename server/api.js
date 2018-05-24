import { Router } from 'express';
import dummyuser from './routes/user';
import admin from './routes/admin';
import user from './routes/request';
import auth from './routes/auth';

const api = Router();

api.get('/', (req, res) => res.send({ ok: true, message: 'Welcome to Andela', status: 'API version 1' }));
api.use('/auth', auth);
api.use('/users', user);
api.use('/requests', admin);
api.use('/users/dummy', dummyuser);
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// No routes matched? 404.
api.use((req, res) => res.status(404).send('Sorry that route/method doesnt exist'));

export default api;
