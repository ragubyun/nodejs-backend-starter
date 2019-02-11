import { Router } from 'express';
import Debug from 'debug';

const routerDebug = new Debug('express:router');

const router = Router();

/**
 * @swagger
 *
 * /sample:
 *   get:
 *     tags: [Sample]
 *     summary: Get all list
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           type: object
 *           properties:
 *             samples:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Sample'
 */
router.get('/', (request, response) => {
  routerDebug('router debug sample');
  response.send('method GET'); // default status code 200
});

/**
 * @swagger
 *
 * /sample/{id}:
 *   get:
 *     tags: [Sample]
 *     summary: Get a sample to matched id
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Sample'
 */
router.get('/:param', (request, response) => {
  const { param } = request.params;
  response.send(`method GET with path param: ${param}`); // default status code 200
});

/**
 * @swagger
 *
 * /sample:
 *   post:
 *     tags: [Sample]
 *     summary: Create a sample
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: sample
 *         description: Sample object
 *         in:  body
 *         required: true
 *         type: object
 *         schema:
 *           $ref: '#/definitions/Sample'
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Sample'
 */
router.post('/', (request, response) => {
  const { body } = request.body;

  response.status(200).send(`method POST: ${body}`);
});

export default router;
