import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JobInterface } from './interface';
import { successCode } from 'src/config/response';

@Injectable()
export class CongViecService {

    prisma = new PrismaClient();

    async createJob(res: any, image: string, job: JobInterface) {

        const { job_name, rate, salary, describe, short_description, star, id_creator, id_type_detail } = job;

        const newData = await this.prisma.job.create({
            data: {
                job_name,
                rate,
                salary,
                image,
                describe,
                short_description,
                star,
                id_type_detail,
                id_creator

            }
        })

        successCode(res, newData)
    }
}
