import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JobInterface } from './interface';
import { successCode } from 'src/config/response';

@Injectable()
export class CongViecService {

    prisma = new PrismaClient();

    async createJob(res: any, image: string, job: JobInterface) {

        

    }
}
