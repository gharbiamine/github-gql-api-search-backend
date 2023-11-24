import { Controller, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getUserFromGithub(@Req() request: Request): any {
    return this.appService.getUserFromGithub(request.body.username);
  }
}
