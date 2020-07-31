import AWSXRay from 'aws-xray-sdk';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import https from 'https';
import sls from 'serverless-http';
import mountRoutes from './routes';

AWSXRay.captureHTTPsGlobal(http, true);
AWSXRay.captureHTTPsGlobal(https, true);

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

mountRoutes(app);

export const localServer = app;
export const lambdaHandler = sls(app);
