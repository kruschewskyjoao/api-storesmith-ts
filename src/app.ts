import express from 'express';
import 'express-async-errors';
import errorHandlerMiddleware from './middleware/erro.middleware';
import produtosRoute from './routes/Produtos.routes';
import userRoute from './routes/User.routes';
import orderRoute from './routes/orders.routes';
import loginRoute from './routes/login.routes';

const app = express();

app.use(express.json());
app.use('/products', produtosRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
app.use('/login', loginRoute);
app.use(errorHandlerMiddleware);

export default app;
