"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoaiCongViecService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const index_1 = require("../response/index");
let LoaiCongViecService = class LoaiCongViecService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getTypeJobList(res) {
        const checkTypeUser = await this.prisma.typeJob.findMany();
        if (checkTypeUser.length === 0)
            (0, index_1.errCode)(res, checkTypeUser, "Không có dữ liệu!");
        (0, index_1.successCode)(res, checkTypeUser);
    }
    async getJobNavBar(res) {
        const checkJob = await this.prisma.typeJob.findMany({
            include: {
                typeDetails: {
                    include: {
                        jobCatalog: true
                    }
                }
            }
        });
        if (checkJob.length === 0) {
            (0, index_1.errCode)(res, checkJob, "Không có dữ liệu!");
            return;
        }
        (0, index_1.successCode)(res, checkJob);
    }
    async findTypeJob(res, id_type_job) {
        const checkTypeDetail = await this.prisma.typeJob.findFirst({
            where: {
                id_type_job: id_type_job
            }
        });
        if (!checkTypeDetail) {
            (0, index_1.errCode)(res, id_type_job, "Không tìm thấy loại công việc");
            return;
        }
        (0, index_1.successCode)(res, checkTypeDetail);
    }
    async createTypeJob(res, createTypeJob) {
        const { type_job_name } = createTypeJob;
        if (!type_job_name) {
            (0, index_1.errCode)(res, type_job_name, "Không có dữ liệu");
            return;
        }
        const checkTypeJob = await this.prisma.typeJob.findMany();
        checkTypeJob.forEach(element => {
            if (element.type_job_name === type_job_name) {
                (0, index_1.errCode)(res, type_job_name, "Loại công việc đã tồn tại");
                return;
            }
        });
        await this.prisma.typeJob.create({
            data: {
                type_job_name: String(type_job_name),
            },
        });
        (0, index_1.successCode)(res, type_job_name);
    }
    async updateTypeJob(res, typeJob, id_type_job) {
        const { type_job_name } = typeJob;
        if (!type_job_name) {
            (0, index_1.errCode)(res, type_job_name, "Không có dữ liệu");
            return;
        }
        const checkTypeJob = await this.prisma.typeJob.findFirst({
            where: {
                id_type_job: id_type_job
            }
        });
        if (!checkTypeJob) {
            (0, index_1.errCode)(res, id_type_job, "Không tìm thấy loại công việc");
            return;
        }
        const newData = {
            type_job_name: type_job_name
        };
        await this.prisma.typeJob.update({
            data: newData,
            where: {
                id_type_job: id_type_job
            }
        });
        (0, index_1.successCode)(res, newData);
    }
};
LoaiCongViecService = __decorate([
    (0, common_1.Injectable)()
], LoaiCongViecService);
exports.LoaiCongViecService = LoaiCongViecService;
//# sourceMappingURL=loai-cong-viec.service.js.map