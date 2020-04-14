import { Controller, Get, Post, Res, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import RepoService from './modules/repo.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly repository: RepoService) { }

  @Get()
  async getHello(): Promise<string> {
    return `Total books are ${await this.repository.AuthorRepository.count()}`;
  }


  @Post('register')
  registerApp(@Res() res: Response) {
    return res.json({ 'message': 'ok' });
  }

  @Delete('register')
  unRegisterApp(@Res() res: Response) {
    return res.json({ 'message': 'ok' });
  }
}
