import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { errCode, successCode } from 'src/config/response';
import { createTypeJobInterface } from './interface';

@Injectable()
export class LoaiCongViecService {
    prisma = new PrismaClient();

    async getTypeJobList(res: any) {
        const checkTypeUser = await this.prisma.typeJob.findMany();

        if (checkTypeUser.length === 0) errCode(res, checkTypeUser, "Không có dữ liệu!");

        successCode(res, checkTypeUser)
    }

    async findTypeJob(res: any, id_type_job: string) {
        const checkTypeDetail = await this.prisma.typeJob.findFirst({
            where: {
                id_type_job: Number(id_type_job)
            }
        })

        if (!checkTypeDetail) {
            errCode(res, id_type_job, "Không tìm thấy loại công việc")
            return;
        }

        successCode(res, checkTypeDetail)
    }

    async createTypeJob(res: any, createTypeJob: createTypeJobInterface) {
        const { type_job_name } = createTypeJob;
        if (!type_job_name) {
            errCode(res, type_job_name, "Không có dữ liệu")
            return
        }

        const checkTypeJob = await this.prisma.typeJob.findMany();

        checkTypeJob.forEach(element => {
            if (element.type_job_name === type_job_name) {
                errCode(res, type_job_name, "Loại công việc đã tồn tại")
                return
            }

        });

        await this.prisma.typeJob.create({
            data: {
                type_job_name: String(type_job_name),
            },
        })

        successCode(res, type_job_name)

    }

    async updateTypeJob(res: any, typeJob: createTypeJobInterface, id_type_job: string) {
        const { type_job_name } = typeJob;

        if (!type_job_name) {
            errCode(res, type_job_name, "Không có dữ liệu")
            return
        }

        const checkTypeJob = await this.prisma.typeJob.findFirst({
            where: {
                id_type_job: Number(id_type_job)
            }
        })

        if (!checkTypeJob) {
            errCode(res, id_type_job, "Không tìm thấy loại công việc")
            return;
        }

        const newData = {
            type_job_name: type_job_name
        }

        await this.prisma.typeJob.update({
            data: newData,
            where: {
                id_type_job: Number(id_type_job)
            }
        })

        successCode(res, newData)

    }
}
