import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { TypeDetailInterface, UpdateTypeDetailInterface } from './interface';
import { errCode, successCode } from 'src/config/response';
import { async } from 'rxjs';

@Injectable()
export class ChiTietLoaiCongViecService {

    prisma = new PrismaClient();

    async createTypeDetailJob(res: any, job: TypeDetailInterface, image: string) {

        const typeDetailJobList = await this.prisma.typeDetail.findMany();

        let isValid = false
        typeDetailJobList.forEach(ele => {
            if (ele.detail_name.toLocaleLowerCase().trim() === job.detail_name.toLocaleLowerCase().trim())
                isValid = true;
        })

        if (isValid) {
            errCode(res, job.detail_name, "Loại công việc đã tồn tại")
            return
        }

        const { detail_name, id_type_job } = job


        await this.prisma.typeDetail.create({
            data: {
                detail_name,
                image,
                typeJob: {
                    connect: {
                        id_type_job: Number(id_type_job)
                    }
                }
            }
        })

        successCode(res, job)
    }


    async getTypeDetailJob(res: any) {
        const checkTypeDetail = await this.prisma.typeDetail.findMany();

        if (!checkTypeDetail) errCode(res, checkTypeDetail, "Không có chi loại công việc")

        successCode(res, checkTypeDetail)
    }

    async findTypeDetailJob(res: any, id_type_detail: string) {
        const checkTypeDetail = await this.prisma.typeDetail.findFirst({
            where: {
                id_type_detail: Number(id_type_detail)
            }
        })

        if (!checkTypeDetail) {
            errCode(res, id_type_detail, "Không tìm thấy chi tiết loại công việc")
            return;
        }

        successCode(res, checkTypeDetail)
    }

    async updateTypeDetailJob(res: any, type_detail: UpdateTypeDetailInterface, id_type_detail: string) {

        const checkTypeDetail = await this.prisma.typeDetail.findFirst({
            where: {
                id_type_detail: Number(id_type_detail)
            }
        })

        if (!checkTypeDetail) {
            errCode(res, id_type_detail, "Không tìm thấy chi tiết loại công việc")
            return;
        }

        await this.prisma.typeDetail.update({
            data: {
                detail_name: type_detail.detail_name,
                typeJob: {
                    connect: {
                        id_type_job: Number(type_detail.id_type_job)
                    }
                }
            },
            where: {
                id_type_detail: Number(id_type_detail)
            }
        })

        successCode(res, type_detail)


    }

    async updateImgTypeDetail(res: any, id_type_detail: string, image: string) {

        const checkTypeDetail = await this.prisma.typeDetail.findFirst({
            where: {
                id_type_detail: Number(id_type_detail)
            }
        })

        if (!checkTypeDetail) {
            errCode(res, id_type_detail, "Không tìm thấy chi tiết loại công việc")
            return;
        }

        await this.prisma.typeDetail.update({
            data: {
                image
            },
            where: {
                id_type_detail: Number(id_type_detail)
            }
        })

        successCode(res, image)


    }

    async deleteTypeDetail(res: any, id_type_detail: string) {
        const checkTypeDetail = await this.prisma.typeDetail.findFirst({
            where: {
                id_type_detail: Number(id_type_detail)
            }
        })

        if (!checkTypeDetail) {
            errCode(res, id_type_detail, "Không tìm thấy chi tiết loại")
            return
        }

        await this.prisma.typeDetail.delete({
            where: {
                id_type_detail: Number(id_type_detail)
            }
        })

        successCode(res, id_type_detail)
    }
}
