import { Router } from 'express';
import produtosController from '../controller/produtos.controller';

const produtosRoute = Router();

produtosRoute.post('/', produtosController.add);
produtosRoute.get('/', produtosController.listAll);

export default produtosRoute;
