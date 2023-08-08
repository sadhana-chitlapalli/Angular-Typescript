import { Request, Response } from 'express';
import * as winston from 'winston';

// error handling class to be reused
export function apiErrorHandler(
    err: any,
    req: Request,
    res: Response,
    message: string,
  ) {
    const error: object = { Message: message, Request: req, Stack: err };
    winston.error(JSON.stringify(error));
    res.json({ Message: message });
  }