import * as ExpressModel from 'express-serve-static-core';

export interface IHttpContext {
  req: ExpressModel.Request;
  res: ExpressModel.Response;
  next: ExpressModel.NextFunction;
}

export * from 'express-serve-static-core';
