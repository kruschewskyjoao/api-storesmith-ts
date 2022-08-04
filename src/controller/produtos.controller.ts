import { Request, Response } from 'express';
import produtosService from '../services/produtos.service';

const produtosController = {
  async add(req: Request, res: Response) {
    const validBody = await produtosService.validateParams(req.body);
    await produtosService.isvalid(validBody);
    const result = await produtosService.add(validBody);
    res.status(201).json(result);
  },
  async listAll(req: Request, res: Response) {
    const result = await produtosService.listAll();
    res.json(result);
  },
};

export default produtosController;