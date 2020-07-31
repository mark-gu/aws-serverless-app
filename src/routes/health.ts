import Router from 'express-promise-router';
import HealthService from '../services/healthService';
import * as Utils from '../common/utils';

const router = Router();

router.get(
  '/ping',
  Utils.invokeAsync(async () => {
    return await new HealthService().ping();
  })
);

export = router;
