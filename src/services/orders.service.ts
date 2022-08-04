import { Order } from '../interfaces';
import orderModel from '../models/orders.model';

const orderService = {
  async listAll(): Promise<Order[]> {
    const result = await orderModel.listAll();
    return result;
  },
};

export default orderService;