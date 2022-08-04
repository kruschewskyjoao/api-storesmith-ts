import jwt from 'jsonwebtoken';
import { User, Login } from '../interfaces';

const secret = process.env.JWT_SECRET || 'secret';

const authService = {
  async makeToken(user: User) {
    const { username, password } = user;
    const token = jwt.sign({ data: { username, password } }, secret);
    return token;
  },
  async makeTokenId(user: Login) {
    const { username, id } = user;
    const token = jwt.sign({ data: { username, id } }, secret);
    return token;
  },
  async readToken(token: string) {
    const data = jwt.verify(token, secret);
    console.log(data);
    return data;
  },
};

export default authService;
