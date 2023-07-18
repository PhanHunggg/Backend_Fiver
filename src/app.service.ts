import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from './app.controller';

@Injectable()
export class AppService {

  prisma = new PrismaClient();


}
