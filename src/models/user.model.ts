import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces';

const table = 'Trybesmith.Users';

const userModel = {
  async add(data: User) {
    const { username, classe, level, password } = data;
    const sql = `INSERT INTO ${table}(username, classe, level, password)
    VALUES
      (?, ?, ?, ?);`;
    const [row] = await connection.query<ResultSetHeader>(sql, [username, classe, level, password]);
    return {
      id: row.insertId,
      username,
      classe,
      level,
      password,
    };
  },
};

export default userModel;