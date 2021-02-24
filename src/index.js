import '@babel/polyfill';
import { config } from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import connectDb from './config/db';
import docRouter from './documentation';
import errorResponse from './helpers/errorHandeler';
import router from './routers/router';
config();

const app = express();
connectDb();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use('/api/documentation', docRouter);
app.use('/api', router);
app.get('/', (req, res) => res.send('Welcome to Task force Todos API'));
app.use((req, res) => {
  errorResponse(res, 404, 'Route not found');
});

const port = process.env.PORT;
app.listen(port, console.log('Server is running on port:', port));

export default app;
