import { Request, Response } from 'express';
import authService from '../services/authService';
import loginService from '../services/login.service';

const userController = {
  async add(req: Request, res: Response) {
    const validBody = await loginService.validateParams(req.body);
    const result = await loginService.add(validBody);
    const token = await authService.makeTokenId(result);
    res.status(200).json({ token });
  },
};

export default userController;