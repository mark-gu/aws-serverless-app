import winston from 'winston';
import { v4 as uuidv4 } from 'uuid';
import * as Model from '../common/model';
import health from './health';

export = (app: Model.Express): void => {
  app.use('/health', health);

  app.get('*', (req: Model.Request, res: Model.Response, next: Model.NextFunction) => {
    const err = new Error(`${req.ip} tried to access ${req.originalUrl}`);
    (err as Model.IHttpErrorInfo).statusCode = 404;

    next(err);
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((err: Model.IHttpErrorInfo, req: Model.Request, res: Model.Response, next: Model.NextFunction) => {
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
};
