import { Router } from 'express';
import userController from '../controller/user.controller';

const userRoute = Router();

userRoute.post('/', userController.add);

export default userRoute;
