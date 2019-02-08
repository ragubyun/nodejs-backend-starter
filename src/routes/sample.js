import { Router } from 'express';
import Debug from 'debug';

const routerDebug = new Debug('express:router');

const router = Router();

router.get('/', (request, response) => {
  response.send('method GET'); // default status code 200
  routerDebug('router debug sample');
});

router.get('/:param', (request, response) => {
  const { param } = request.params;
  response.send(`method GET with path param: ${param}`); // default status code 200
});

router.post('/', (request, response) => {
  const { body } = request.body;

  response.status(200).send(`method POST: ${body}`);
});

export default router;
