import * as Model from "./model";

export function invokeAsync<T>(serviceFn: (context?: Model.IHttpContext) => Promise<T>): Model.RequestHandler {
  return async (req: Model.Request, res: Model.Response, next: Model.NextFunction) => {
    try {
      const data = await serviceFn({ req, res, next });
      res.json({ data });
    }
    catch(err) {
      next(err)
    }
  };
}
