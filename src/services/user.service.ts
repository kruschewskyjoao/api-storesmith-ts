import Joi from 'joi';
import { User } from '../interfaces';
import userModel from '../models/user.model';
import UnprocessableError from '../errors/error-unprocessable';

const produtosService = {
  async isvalid(data: User) {
    if (typeof data.username !== 'string') {
      throw new UnprocessableError('"username" must be a string');
    }
    if (data.username.length < 3) {
      throw new UnprocessableError('"username" length must be at least 3 characters long');
    }
    if (typeof data.classe !== 'string') throw new UnprocessableError('"classe" must be a string');
    if (data.classe.length < 3) {
      throw new UnprocessableError('"classe" length must be at least 3 characters long');
    }
    return true;
  },
  async isvalidPartTwo(data: User) {
    if (typeof data.level !== 'number') {
      throw new UnprocessableError('"level" must be a number');
    }
    if (data.level <= 0) {
      throw new UnprocessableError('"level" must be greater than or equal to 1');
    }
    if (typeof data.password !== 'string') {
      throw new UnprocessableError('"password" must be a string');
    }
    if (data.password.length <= 8) {
      throw new UnprocessableError('"password" length must be at least 8 characters long');
    }
    return true;
  },
  
  async validateParams(unknown: unknown): Promise<User> {
    const schema = Joi.object({
      username: Joi.required(),
      classe: Joi.required(),
      level: Joi.required(),
      password: Joi.required(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },
  async add(data: User): Promise<User> {
    const result = await userModel.add(data);
    return result;
  },
};

export default produtosService;
