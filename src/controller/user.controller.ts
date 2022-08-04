import { Request, Response } from 'express';
import authService from '../services/authService';
import userService from '../services/user.service';

const userController = {
  async add(req: Request, res: Response) {
    const validBody = await userService.validateParams(req.body);
    await userService.isvalid(validBody);
    await userService.isvalidPartTwo(validBody);
    const result = await userService.add(validBody);
    const token = await authService.makeToken(result);
    res.status(201).json({ token });
  },
};

export default userController;