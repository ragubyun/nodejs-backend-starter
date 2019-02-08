import path from 'path';
import express from 'express';
import Debug from 'debug';

import routes from './routes/index';

const app = express();
const { PORT = 3000 } = process.env;

const appDebug = new Debug('express:app');
const httpDebug = new Debug('express:http');

app.use(express.json());
app.use((request, response, next) => {
  httpDebug(`${request.method} ${request.url}`);
  httpDebug(`body: ${JSON.stringify(request.body)}`);
  next();
});
app.use('/api/v1', routes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  appDebug(`listening on port ${PORT}!`);
});

/*
  TODO
    - test: jest, coverage
    - eslint, prettier
    - monitoring
    - debug
 */
