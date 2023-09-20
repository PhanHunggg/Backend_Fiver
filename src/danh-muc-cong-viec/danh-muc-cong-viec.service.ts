import { async } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { errCode, successCode } from 'src/response';
import { JobCatalogInterface } from './interface';

@Injectable()
export class DanhMucCongViecService {
    prisma = new PrismaClient();

    async getJobCatalog(res: any) {
        const chekcJobCatalog = await this.prisma.jobCatalog.findMany()

        if (!!!chekcJobCatalog) {
            errCode(res, chekcJobCatalog, "Không có danh mục công việc ")
            return
        }

        successCode(res, chekcJobCatalog)
    }

    async createJobCatalog(res: any, jobCatalog: JobCatalogInterface) {
        const checkJobCatalog = await this.prisma.jobCatalog.findMany()

        let isValid = false;
        checkJobCatalog.forEach((ele) => {
            if (ele.name_job_catalog.trim().toLocaleLowerCase() === jobCatalog.name_job_catalog.trim().toLocaleLowerCase()) {
                errCode(res, jobCatalog.name_job_catalog, "Danh mục đã tồn tại")
                isValid = true
                return
            }
        })

        if (isValid) return

        await this.prisma.jobCatalog.create({
            data: jobCatalog
        })


        successCode(res, jobCatalog)

    }

    async findJobCatalog(res: any, id_job_catalog: string) {
        const checkJobCatalog = await this.prisma.jobCatalog.findFirst({
            where: {
                id_job_catalog: Number(id_job_catalog)
            }
        })

        if (!checkJobCatalog) {
            errCode(res, id_job_catalog, "Không tìm thấy danh mục công việc")
            return
        }

        successCode(res, checkJobCatalog)
    }

    async updateJobCatalog(res: any, jobCatalog: JobCatalogInterface, id_job_catalog: string) {
        const checkJobCatalog = await this.prisma.jobCatalog.findFirst({
            where: {
                id_job_catalog: Number(id_job_catalog)
            }
        })

        if (!checkJobCatalog) {
            errCode(res, id_job_catalog, "Không tìm thấy danh mục công việc")
            return
        }

        await this.prisma.jobCatalog.update({
            data: jobCatalog,
            where: {
                id_job_catalog: Number(id_job_catalog)
            }
        })

        successCode(res, jobCatalog);
    }

    async deleteJobCatalog(res: any, id_job_catalog: string) {
        const chekcJobCatalog = await this.prisma.jobCatalog.findFirst({
            where: {
                id_job_catalog: Number(id_job_catalog)
            }
        })

        if (!chekcJobCatalog) {
            errCode(res, id_job_catalog, "Không tìm thấy danh mục công việc")

            return
        }

        await this.prisma.jobCatalog.delete({
            where: {
                id_job_catalog: Number(id_job_catalog)
            }
        })

        successCode(res, chekcJobCatalog)
    }
}
