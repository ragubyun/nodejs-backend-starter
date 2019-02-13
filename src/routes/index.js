import { Router } from 'express';

import routerUsers from './router-users';
import httpLogger from '../middleware/http-logger';

const router = Router();

router.use(httpLogger);

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
