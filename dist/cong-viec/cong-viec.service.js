"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CongViecService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const index_1 = require("../response/index");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let CongViecService = class CongViecService {
    constructor(cloudinary) {
        this.cloudinary = cloudinary;
        this.prisma = new client_1.PrismaClient();
    }
    async getJobList(res) {
        try {
            const checkJob = await this.prisma.job.findMany();
            if (!!!checkJob) {
                (0, index_1.errCode)(res, checkJob, "Không có công việc nào!");
                return;
            }
            (0, index_1.successCode)(res, checkJob);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    async findJob(res, id_job) {
        const checkJob = await this.prisma.job.findFirst({
            where: {
                id_job: id_job
            }
        });
        if (!checkJob) {
            (0, index_1.errCode)(res, id_job, "Không tìm thấy công việc!");
            return;
        }
        (0, index_1.successCode)(res, checkJob);
    }
    async findJobByJobType(res, id_type_job) {
        const checkTypeJob = await this.prisma.typeJob.findFirst({
            where: {
                id_type_job: id_type_job
            }
        });
        if (!checkTypeJob) {
            (0, index_1.errCode)(res, id_type_job, "Không có loại công việc này!");
            return;
        }
        const typeJob = await this.prisma.typeJob.findUnique({
            where: {
                id_type_job: id_type_job
            },
            include: {
                typeDetails: {
                    include: {
                        jobCatalog: {
                            include: { jobs: true }
                        }
                    }
                }
            },
        });
        if (!typeJob) {
            (0, index_1.errCode)(res, id_type_job, "Không có công việc thuôc loại công việc này!");
            return;
        }
        const jobList = typeJob.typeDetails.flatMap((typeDetail) => typeDetail.jobCatalog.flatMap((jobCatalog) => jobCatalog.jobs));
        (0, index_1.successCode)(res, jobList);
    }
    async findJobByTypeDetail(res, id_type_detail) {
        const checkTypeDetail = await this.prisma.typeDetail.findFirst({
            where: {
                id_type_detail: id_type_detail
            }
        });
        if (!checkTypeDetail) {
            (0, index_1.errCode)(res, id_type_detail, "Không có loại công việc này!");
            return;
        }
        const typeDetail = await this.prisma.typeDetail.findUnique({
            where: {
                id_type_detail: id_type_detail
            },
            include: {
                jobCatalog: {
                    include: { jobs: true }
                }
            },
        });
        if (!typeDetail) {
            (0, index_1.errCode)(res, id_type_detail, "Không có công việc thuôc chi tiết loại công việc này!");
            return;
        }
        const jobList = typeDetail.jobCatalog.flatMap((jobCatalog) => jobCatalog.jobs);
        (0, index_1.successCode)(res, jobList);
    }
    async findJobByJobCatalog(res, id_job_catalog) {
        const checkJobCatalog = await this.prisma.jobCatalog.findFirst({
            where: {
                id_job_catalog: id_job_catalog
            }
        });
        if (!checkJobCatalog) {
            (0, index_1.errCode)(res, id_job_catalog, "Không có loại công việc này!");
            return;
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
            (0, index_1.errCode)(res, id_job_catalog, "Không có công việc thuộc chi tiết loại công việc này!");
            return;
        }
        const jobList = jobCatalog.jobs;
        (0, index_1.successCode)(res, jobList);
    }
    async createJob(res, image, job) {
        try {
            const checkUser = await this.prisma.user.findFirst({
                where: {
                    id_user: job.id_creator
                }
            });
            if (!checkUser) {
                (0, index_1.errCode)(res, job.id_creator, "Người tạo không tồn tại!!");
                return;
            }
            if (checkUser.role !== "Admin") {
                (0, index_1.errCode)(res, checkUser.role, "Vai trò của bạn không thể thực hiện thao tác trên!");
                return;
            }
            ;
            const imgUrl = await this.cloudinary.uploadImage(image);
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
            });
            (0, index_1.successCode)(res, job);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    async updateJob(res, job, id_job) {
        try {
            const checkJob = await this.prisma.job.findFirst({
                where: {
                    id_job: id_job,
                }
            });
            if (!checkJob) {
                (0, index_1.errCode)(res, id_job, "Không tìm thấy công việc!");
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
            });
            (0, index_1.successCode)(res, job);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    async updateImgJob(res, id_job, file) {
        try {
            const imgUrl = await this.cloudinary.uploadImage(file);
            await this.prisma.job.update({
                where: {
                    id_job: id_job
                },
                data: {
                    image: imgUrl
                }
            });
            (0, index_1.successCode)(res, imgUrl);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    async deleteJob(res, id_job) {
        const checkJob = await this.prisma.job.findFirst({
            where: {
                id_job: id_job
            }
        });
        if (!checkJob) {
            (0, index_1.errCode)(res, id_job, "Không tìm thấy công việc này!");
            return;
        }
        const checkHireJob = await this.prisma.hireJob.findFirst({
            where: {
                id_job: id_job
            }
        });
        if (checkHireJob) {
            (0, index_1.errCode)(res, checkHireJob, "Công việc đã được thuê không thể xóa!");
            return;
        }
        await this.prisma.job.delete({
            where: {
                id_job: id_job
            }
        });
        (0, index_1.successCode)(res, checkJob);
    }
};
CongViecService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cloudinary_service_1.CloudinaryService])
], CongViecService);
exports.CongViecService = CongViecService;
//# sourceMappingURL=cong-viec.service.js.map