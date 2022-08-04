import Joi from 'joi';
import { Product } from '../interfaces';
import produtosModel from '../models/produtos.model';
import UnprocessableError from '../errors/error-unprocessable';

const produtosService = {
  async validateParams(unknown: unknown): Promise<Product> {
    const schema = Joi.object({
      name: Joi.required(),
      amount: Joi.required(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },
  async isvalid(data: Product) {
    if (typeof data.name !== 'string') throw new UnprocessableError('"name" must be a string');
    if (data.name.length < 3) {
      throw new UnprocessableError('"name" length must be at least 3 characters long');
    }
    if (typeof data.amount !== 'string') throw new UnprocessableError('"amount" must be a string');
    if (data.amount.length < 3) {
      throw new UnprocessableError('"amount" length must be at least 3 characters long');
    }
    return true;
  },
  async add(data: Product): Promise<Product> {
    const result = await produtosModel.add(data);
    return result;
  },
  async listAll(): Promise<Product[]> {
    const result = await produtosModel.listAll();
    return result;
  },
};

export default produtosService;
