import express from 'express';

import ClassesControler from './controllers/ClassesController';
import ConnectionsController from './controllers/ConncectionsController';

const routes = express.Router();
const classesControllers = new ClassesControler();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;