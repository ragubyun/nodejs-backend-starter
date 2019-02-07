import path from 'path';
import express from 'express';

import routes from './routes/index';

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());
app.use((request, response, next) => {
  console.log(`${request.method} ${request.url}`);
  console.log(request.body);
  next();
});
app.use('/api/v1', routes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

/*
  TODO
    - test: jest, coverage
    - eslint, prettier
    - monitoring
 */
