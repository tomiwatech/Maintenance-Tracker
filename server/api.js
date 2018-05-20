import { Router } from 'express';
import user from './routes/user';

const api = Router();

api.get('/', (req, res) => res.send({ ok: true, message: 'Welcome to Andela', status: 'API version 1' }));
api.use('/users', user);

// No routes matched? 404.
api.use((req, res) => res.status(404).send('Sorry that route/method doesnt exist'));

export default api;
