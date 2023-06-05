import { NextFunction, Request, Response } from 'express'
import { CustomAPIError } from '../errors/custom-error'

const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return next(err)
}

export default errorHandlerMiddleware
