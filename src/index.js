import '@babel/polyfill';
import 'dotenv/config.js';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import connectDb from './config/db.js';
import errorResponse from './helpers/errorHandeler';

const app = express();
connectDb();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

app.use((req, res) => {
  errorResponse(res, 404, 'Route not found');
});

const port = process.env.PORT;
app.listen(port, console.log('Server is running on port:', port));

export default app;
