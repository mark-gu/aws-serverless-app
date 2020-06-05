import express from 'express';
import * as Utils from '../common/utils';
import HealthService from '../services/healthService';

const api = express.Router();

api.get(
  '/health/ping',
  Utils.invokeAsync(async () => {
    return await new HealthService().ping();
  })
);

export = api;
