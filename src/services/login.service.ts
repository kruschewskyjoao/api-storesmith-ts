import Joi from 'joi';
import { Login } from '../interfaces';
import loginModel from '../models/login.model';
import NotFoundError from '../errors/error-handler';

const produtosService = {
  async validateParams(unknown: unknown): Promise<Login> {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },
  async add(data: Login): Promise<Login> {
    const result = await loginModel.add(data);
    if (!result) throw new NotFoundError('Username or password invalid');
    return result;
  },
};

export default produtosService;
