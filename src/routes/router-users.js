import { Router } from 'express';
import Debug from 'debug';

const debugRouter = new Debug('express:router');

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     tags: [Users]
 *     summary: Get all users.
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           type: object
 *           properties:
 *             users:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/User'
 */
router.get('/', (request, response) => {
  debugRouter('router debug sample');

  return response.send('list of all users'); // default status code 200
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Get a user information with id matching.
 *     parameters:
 *       - in: path
 *         name: id # have to be same as path parameter's name
 *         description: user id of the user to get
 *         schema:
 *           type: string
 *           required: true
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/:id', (request, response) => {
  const { id } = request.params;

  return response.send(`user information of ${id}`); // default status code 200
});

/**
 * @swagger
 * /users:
 *   post:
 *     tags: [Users]
 *     summary: Creates a new user
 *     parameters:
 *       - in:  body
 *         name: user
 *         description: user information to create
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: Created
 *         schema:
 *           $ref: '#/definitions/Response'
 *       409:
 *         description: Conflict
 *         schema:
 *           $ref: '#/definitions/Response'
 *       422:
 *         description: Unprocessable Entity
 *         schema:
 *           $ref: '#/definitions/Response'
 */
router.post('/', (request, response) => {
  const { id, name, phone } = request.body;

  if (!id || !name || !phone) {
    return response.status(422).send({
      result: 'fail',
      code: '422',
      message: 'Unprocessable Entity',
    });
  }

  return response.status(201).send({
    result: 'success',
    code: '201',
    message: 'Created',
  });
});

export default router;
