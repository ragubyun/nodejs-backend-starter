import { Router } from 'express';
import Debug from 'debug';

import sampleRouter from './sample';

const httpDebug = new Debug('express:http');

const router = Router();

router.use((request, response, next) => {
  httpDebug(`${request.method} ${request.url}`);
  httpDebug(`body: ${JSON.stringify(request.body)}`);
  next();
});

/**
 * @swagger
 * tags:
 *   name: Sample
 *   description: Sample management
 * definitions:
 *   Sample:
 *     type: object
 *     required:
 *       - content
 *     properties:
 *       id:
 *         type: string
 *         description: id
 *       content:
 *         type: string
 *         description: content
 */
router.use('/sample', sampleRouter);

export default router;
