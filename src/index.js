import path from 'path';
import express from 'express';
import Debug from 'debug';
import swaggerUI from 'swagger-ui-express';

import routes from './routes/index';
import swaggerSpec from './swagger-jsdoc-config';

const app = express();
const { PORT = 3000 } = process.env;

const debugApp = new Debug('express:app');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1', routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(PORT, () => {
  debugApp(`listening on port ${PORT}!`);
});

/*
  TODO
    - test: jest, coverage, supertest
    - monitoring
 */
