import { Request, Response } from 'express';
import orderService from '../services/orders.service';

const orderController = {
  async listAll(req: Request, res: Response) {
    const result = await orderService.listAll();
    res.json(result);
  },
};

export default orderController;