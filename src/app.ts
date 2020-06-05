import AWSXRay from 'aws-xray-sdk';
import http from 'http';
import https from 'https';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import sls from 'serverless-http';
import winston from 'winston';
import { v4 as uuidv4 } from 'uuid';
import apiRoutes from './routes/api';

AWSXRay.captureHTTPsGlobal(http, true);
AWSXRay.captureHTTPsGlobal(https, true);

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/api', apiRoutes);

app.get('*', (req, res, next) => {
  const err = new Error(`${req.ip} tried to access ${req.originalUrl}`);
  (err as any).statusCode = 404;

  next(err);
});

app.use((err: any, req: never, res: any, next: never) => {
  const statusCode = err.statusCode || 500;

  const uuid = uuidv4();
  const clientMessage = `[MessageID: ${uuid}] ${err.clientMessage || 'Internal Server Error'}`;
  const serverMessage = `[MessageID: ${uuid}] ${err.serverMessage || err.message}`;

  winston.error(serverMessage);

  if (!err.statusCode) err.statusCode = 500;

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    clientMessage,
  });
});

export const localServer = app;
export const lambdaHandler = sls(app);
