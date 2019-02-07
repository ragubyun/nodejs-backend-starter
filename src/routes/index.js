import { Router } from 'express';

const router = Router();

import sampleRouter from './sample';

router.use('/sample', sampleRouter);

export default router;
