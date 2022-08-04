import connection from './connection';
import { Order } from '../interfaces';

const tableOrders = 'Trybesmith.Orders';
const tableProducts = 'Trybesmith.Products';

const orderModel = {
  async listAll(): Promise<Order[]> {
    const sql = `SELECT orders.id, orders.userId, JSON_ARRAYAGG(product.id) AS productsIds
    FROM ${tableOrders} as orders
    INNER JOIN ${tableProducts} AS product
    ON orders.id = product.orderId
    GROUP BY orders.id
    ORDER BY orders.userId;`;
    const [rows] = await connection.query(sql);
    return rows as Order[];
  },
};

export default orderModel;