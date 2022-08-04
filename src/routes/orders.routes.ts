import { Router } from 'express';
import orderController from '../controller/orders.controller';

const orderRoute = Router();

orderRoute.get('/', orderController.listAll);

export default orderRoute;