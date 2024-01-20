"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThueCongViecService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const luxon_1 = require("luxon");
const index_1 = require("../response/index");
let ThueCongViecService = class ThueCongViecService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getHireJobList(res) {
        try {
            const checkHireJob = await this.prisma.hireJob.findMany();
            if (!!!checkHireJob) {
                (0, index_1.errCode)(res, checkHireJob, "Chưa có công việc nào được thuê");
                return;
            }
            (0, index_1.successCode)(res, checkHireJob);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    async findHireJob(id_hire_job, res) {
        try {
            const checkHireJob = await this.prisma.hireJob.findFirst({
                where: {
                    id_hire_job: id_hire_job
                }
            });
            if (!checkHireJob) {
                (0, index_1.errCode)(res, id_hire_job, "Không tìm thấy công việc thuê!");
                return;
            }
            (0, index_1.successCode)(res, checkHireJob);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    async createHireJob(res, hireJob) {
        try {
            const checkHireJob = await this.prisma.hireJob.findFirst({
                where: {
                    id_job: hireJob.id_job
                }
            });
            if (checkHireJob) {
                (0, index_1.errCode)(res, checkHireJob, "Công việc đã được thuê!");
                return;
            }
            const dateHire = luxon_1.DateTime.now().setZone('Asia/Ho_Chi_Minh').toISO();
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
            });
            (0, index_1.successCode)(res, hireJob);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    async deleteHireJob(res, id_hire_job) {
        try {
            const checkHireJob = await this.prisma.hireJob.findFirst({
                where: {
                    id_hire_job: id_hire_job
                }
            });
            if (!checkHireJob) {
                (0, index_1.errCode)(res, id_hire_job, "Không timg thấy công việc được thuê!");
                return;
            }
            await this.prisma.hireJob.delete({
                where: {
                    id_hire_job: id_hire_job
                }
            });
            (0, index_1.successCode)(res, checkHireJob);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
};
ThueCongViecService = __decorate([
    (0, common_1.Injectable)()
], ThueCongViecService);
exports.ThueCongViecService = ThueCongViecService;
//# sourceMappingURL=thue-cong-viec.service.js.map