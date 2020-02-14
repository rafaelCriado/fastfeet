import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

// Rotas com autenticação
routes.use(authMiddleware);

// Recipient routes
routes.post('/recipients', RecipientController.store);
routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.detail);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

export default routes;
