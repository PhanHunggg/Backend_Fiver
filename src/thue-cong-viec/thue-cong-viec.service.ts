import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { HireJobInterface } from './interface';
import { DateTime } from 'luxon';
import { errCode, failCode, successCode } from '../response/index';

@Injectable()
export class ThueCongViecService {

    prisma = new PrismaClient();
    localModule = require('../response/index');

    async getHireJobList(res: any) {

        try {
            const checkHireJob = await this.prisma.hireJob.findMany();

            if (!!!checkHireJob) {
                errCode(res, checkHireJob, "Chưa có công việc nào được thuê");
                return
            }
            successCode(res, checkHireJob);
        } catch (error) {
            failCode(res, error.message)

        }
    }

    async findHireJob(id_hire_job: string, res: any) {

        try {
            const checkHireJob = await this.prisma.hireJob.findFirst({
                where: {
                    id_hire_job: id_hire_job
                }
            });

            if (!checkHireJob) {
                errCode(res, id_hire_job, "Không tìm thấy công việc thuê!");
                return
            }

            successCode(res, checkHireJob);
        } catch (error) {
            failCode(res, error.message)
        }
    }

    async createHireJob(res: any, hireJob: HireJobInterface) {
        try {
            const checkHireJob = await this.prisma.hireJob.findFirst({
                where: {
                    id_job: hireJob.id_job
                }
            })

            if (checkHireJob) {
                errCode(res, checkHireJob, "Công việc đã được thuê!");
                return
            }

            const dateHire = DateTime.now().setZone('Asia/Ho_Chi_Minh').toISO();

            await this.prisma.hireJob.create({
                data: {
                    date_hire: dateHire,
                    complete: false,
                    job: {
                        connect: {
                            id_job: hireJob.id_job
                        }
                    },
                    user: {
                        connect: {
                            id_user: hireJob.id_user
                        }
                    }
                }
            })

            successCode(res, hireJob)
        } catch (error) {
            failCode(res, error.message)
        }
    }

    async deleteHireJob(res: any, id_hire_job: string) {
        try {
            const checkHireJob = await this.prisma.hireJob.findFirst({
                where: {
                    id_hire_job: id_hire_job
                }
            })

            if (!checkHireJob) {
                errCode(res, id_hire_job, "Không timg thấy công việc được thuê!")
                return
            }

            await this.prisma.hireJob.delete({
                where: {
                    id_hire_job: id_hire_job
                }
            })

            successCode(res, checkHireJob)
        } catch (error) {
            failCode(res, error.message)
        }
    }
}
