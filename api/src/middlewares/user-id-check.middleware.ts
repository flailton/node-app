import { BadRequestException, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class UserIdCheckMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    if (isNaN(Number(request.params.id)) || !Number(request.params.id)) {
      throw new BadRequestException();
    }

    next();
  }
}
