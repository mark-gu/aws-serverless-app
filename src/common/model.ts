import * as ExpressModel from 'express-serve-static-core';

export interface IHttpContext {
  req: ExpressModel.Request;
  res: ExpressModel.Response;
  next: ExpressModel.NextFunction;
}

export interface IHttpErrorInfo extends Error {
  statusCode: number;
  clientMessage?: string;
  serverMessage?: string;
}

export * from 'express-serve-static-core';
