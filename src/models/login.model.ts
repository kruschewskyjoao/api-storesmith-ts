import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Login } from '../interfaces';

const table = 'Trybesmith.Users';

const loginModel = {
  async add(data: Login) {
    const { username, password } = data;
    const sql = `SELECT username, password 
    FROM ${table}
    WHERE username=(?)
    AND password=(?)`;
    const [[row]] = await connection.query<RowDataPacket[]>(sql, [username, password]);
    return row as Login;
  },
};

export default loginModel;