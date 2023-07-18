import { Delete, Controller, Get, Response, Post, Param,Body } from '@nestjs/common';
import { AppService } from './app.service';

export interface User {
  id: number;
  email: string;
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


}
