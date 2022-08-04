import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces';

const table = 'Trybesmith.Products';

const produtosModel = {
  async add(data: Product) {
    const { name, amount } = data;
    const sql = `INSERT INTO ${table}(name, amount)
    VALUES
      (?, ?);`;
    const [row] = await connection.query<ResultSetHeader>(sql, [name, amount]);
    return {
      id: row.insertId,
      name,
      amount,
    };
  },
  async listAll(): Promise<Product[]> {
    const sql = `select * from ${table}`;
    const [rows] = await connection.query(sql);
    return rows as Product[];
  },
};

export default produtosModel;
