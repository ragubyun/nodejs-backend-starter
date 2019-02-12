import { Router } from 'express';
import Debug from 'debug';

import routerUsers from './router-users';

const debugHttp = new Debug('express:http');

const router = Router();

router.use((request, response, next) => {
  debugHttp(`${request.method} ${request.url}`);
  debugHttp(`body: ${JSON.stringify(request.body)}`);
  next();
});

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - phone
 *     properties:
 *       id:
 *         type: string
 *         description: user id
 *       name:
 *         type: string
 *         description: full name
 *       phone:
 *         type: string
 *         description: e.g. xxx-xxxx-xxxx
 *     example:
 *       id: rain
 *       name: Jihoon Byun
 *       phone: 010-1234-5678
 *   Response:
 *     type: object
 *     required:
 *       - result
 *       - code
 *       - message
 *     properties:
 *       result:
 *         type: string
 *         description: result of request
 *       code:
 *         type: string
 *         description: error code from server
 *       message:
 *         type: string
 *         description: error message detail
 */
router.use('/users', routerUsers);

export default router;
