import { Router } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express';

const docRouter = Router();

const spec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TODO App',
      version: '1.0.0',
      description: 'This is a todo app API',

      contact: {
        name: 'NSABIMANA Issa',
        url: '',
        email: 'mansurissa6@gmail.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./src/routers/*.js']
};

const swaggerDocument = swaggerJsDoc(spec);

docRouter.use(
  '/',
  swaggerui.serve,
  swaggerui.setup(swaggerDocument, { explorer: true })
);

export default docRouter;
