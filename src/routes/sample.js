import { Router } from'express';

const router = Router();

router.get('/', (request, response) => {
  response.send('method GET'); // default status code 200
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
