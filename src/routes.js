import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Adicionar validação do token
routes.use(authMiddleware);
// Usuários
routes.put('/users', UserController.update);

// Prestador de serviços
routes.get('/providers', ProviderController.index);

// Agendamento do usuário
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

// Agendamento
routes.get('/schedule', ScheduleController.index);

// Arquivos
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
