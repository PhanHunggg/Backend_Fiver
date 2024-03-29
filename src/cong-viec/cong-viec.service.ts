import { async } from 'rxjs';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JobInterface } from './interface';
import { errCode, failCode, successCode } from '../response/index';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class CongViecService {

    constructor(private cloudinary: CloudinaryService) { }
    prisma = new PrismaClient();

    async getJobList(res: any) {
        try {
            const checkJob = await this.prisma.job.findMany();

            if (!!!checkJob) {
                errCode(res, checkJob, "Không có công việc nào!");
                return;
            }

            successCode(res, checkJob);
        } catch (error) {
            failCode(res, error.message)
        }
    }

    async findJob(res: any, id_job: number) {
        const checkJob = await this.prisma.job.findFirst({
            where: {
                id_job: id_job
            }
        })

        if (!checkJob) {
            errCode(res, id_job, "Không tìm thấy công việc!")
            return
        }

        successCode(res, checkJob)
    }

    async findJobByJobType(res: any, id_type_job: number) {
        const checkTypeJob = await this.prisma.typeJob.findFirst({
            where: {
                id_type_job: id_type_job
            }
        })

        if (!checkTypeJob) {
            errCode(res, id_type_job, "Không có loại công việc này!");
            return
        }

        const typeJob = await this.prisma.typeJob.findUnique({
            where: {
                id_type_job: id_type_job
            },
            include: {
                typeDetails:
                {
                    include:
                    {
                        jobCatalog:
                        {
                            include:
                                { jobs: true }
                        }
                    }
                }
            },
        });

        if (!typeJob) {
            errCode(res, id_type_job, "Không có công việc thuôc loại công việc này!");
            return
        }
        const jobList = typeJob.typeDetails.flatMap((typeDetail) =>
            typeDetail.jobCatalog.flatMap((jobCatalog) => jobCatalog.jobs)
        );

        successCode(res, jobList)

    }

    async findJobByTypeDetail(res: any, id_type_detail: number) {
        const checkTypeDetail = await this.prisma.typeDetail.findFirst({
            where: {
                id_type_detail: id_type_detail
            }
        })

        if (!checkTypeDetail) {
            errCode(res, id_type_detail, "Không có loại công việc này!");
            return
        }

        const typeDetail = await this.prisma.typeDetail.findUnique({
            where: {
                id_type_detail: id_type_detail
            },
            include: {
                jobCatalog:
                {
                    include:
                        { jobs: true }
                }

            },
        });

        if (!typeDetail) {
            errCode(res, id_type_detail, "Không có công việc thuôc chi tiết loại công việc này!");
            return
        }

        const jobList = typeDetail.jobCatalog.flatMap((jobCatalog) => jobCatalog.jobs)


        successCode(res, jobList)

    }

    async findJobByJobCatalog(res: any, id_job_catalog: number) {
        const checkJobCatalog = await this.prisma.jobCatalog.findFirst({
            where: {
                id_job_catalog: id_job_catalog
            }
        })

        if (!checkJobCatalog) {
            errCode(res, id_job_catalog, "Không có loại công việc này!");
            return
        }

        const jobCatalog = await this.prisma.jobCatalog.findUnique({
            where: {
                id_job_catalog: id_job_catalog
            },
            include: {
                jobs: true

            },
        });


        if (!jobCatalog) {
            errCode(res, id_job_catalog, "Không có công việc thuộc chi tiết loại công việc này!");
            return
        }

        const jobList = jobCatalog.jobs

        successCode(res, jobList)

    }


    async createJob(res: any, image: Express.Multer.File, job: JobInterface) {
        try {

            const checkUser = await this.prisma.user.findFirst({
                where: {
                    id_user: job.id_creator
                }
            })

            if (!checkUser) {
                errCode(res, job.id_creator, "Người tạo không tồn tại!!");
                return;
            }

            if (checkUser.role !== "Admin") {
                errCode(res, checkUser.role, "Vai trò của bạn không thể thực hiện thao tác trên!");
                return;
            };

            const imgUrl: string = await this.cloudinary.uploadImage(image)


            await this.prisma.job.create({
                data: {
                    job_name: job.job_name,
                    rate: job.rate,
                    salary: Number(job.salary),
                    image: imgUrl,
                    describe: job.describe,
                    short_description: job.short_description,
                    star: Number(job.star),
                    creator: {
                        connect: {
                            id_user: job.id_creator
                        }
                    },
                    jobCatalog: {
                        connect: {
                            id_job_catalog: job.id_job_catalog
                        }
                    }
                }
            })

            successCode(res, job)


        } catch (error) {
            failCode(res, error.message)
        }

    }

    async updateJob(res: any, job: JobInterface, id_job: number) {
        try {
            const checkJob = await this.prisma.job.findFirst({
                where: {
                    id_job: id_job,
                }
            })

            if (!checkJob) {
                errCode(res, id_job, "Không tìm thấy công việc!");
                return;
            }

            await this.prisma.job.update({
                data: {
                    job_name: job.job_name,
                    rate: job.rate,
                    salary: Number(job.salary),
                    describe: job.describe,
                    short_description: job.short_description,
                    star: Number(job.star),
                    creator: {
                        connect: {
                            id_user: job.id_creator
                        }
                    },
                    jobCatalog: {
                        connect: {
                            id_job_catalog: job.id_job_catalog
                        }
                    }
                },
                where: {
                    id_job: id_job
                }
            })

            successCode(res, job)
        } catch (error) {
            failCode(res, error.message)
        }
    }

    async updateImgJob(res: any, id_job: number, file: Express.Multer.File) {

        try {
            const imgUrl = await this.cloudinary.uploadImage(file)

            await this.prisma.job.update({
                where: {
                    id_job: id_job
                },
                data: {
                    image: imgUrl
                }
            })

            successCode(res, imgUrl)
        } catch (error) {
            failCode(res, error.message);
        }


    }

    async deleteJob(res: any, id_job: number) {

        const checkJob = await this.prisma.job.findFirst({
            where: {
                id_job: id_job
            }
        })

        if (!checkJob) {
            errCode(res, id_job, "Không tìm thấy công việc này!");
            return
        }

        const checkHireJob = await this.prisma.hireJob.findFirst({
            where: {
                id_job: id_job
            }
        })

        if (checkHireJob) {
            errCode(res, checkHireJob, "Công việc đã được thuê không thể xóa!");
            return
        }

        await this.prisma.job.delete({
            where: {
                id_job: id_job
            }
        })

        successCode(res, checkJob)
    }
}
