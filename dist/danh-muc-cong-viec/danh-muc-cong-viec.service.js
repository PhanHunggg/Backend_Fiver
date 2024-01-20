"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanhMucCongViecService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const index_1 = require("../response/index");
let DanhMucCongViecService = class DanhMucCongViecService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getJobCatalog(res) {
        const chekcJobCatalog = await this.prisma.jobCatalog.findMany();
        if (!!!chekcJobCatalog) {
            (0, index_1.errCode)(res, chekcJobCatalog, "Không có danh mục công việc ");
            return;
        }
        (0, index_1.successCode)(res, chekcJobCatalog);
    }
    async createJobCatalog(res, jobCatalog) {
        const checkJobCatalog = await this.prisma.jobCatalog.findMany();
        let isValid = false;
        checkJobCatalog.forEach((ele) => {
            if (ele.name_job_catalog.trim().toLocaleLowerCase() === jobCatalog.name_job_catalog.trim().toLocaleLowerCase()) {
                (0, index_1.errCode)(res, jobCatalog.name_job_catalog, "Danh mục đã tồn tại");
                isValid = true;
                return;
            }
        });
        if (isValid)
            return;
        await this.prisma.jobCatalog.create({
            data: jobCatalog
        });
        (0, index_1.successCode)(res, jobCatalog);
    }
    async findJobCatalog(res, id_job_catalog) {
        const checkJobCatalog = await this.prisma.jobCatalog.findFirst({
            where: {
                id_job_catalog: id_job_catalog
            }
        });
        if (!checkJobCatalog) {
            (0, index_1.errCode)(res, id_job_catalog, "Không tìm thấy danh mục công việc");
            return;
        }
        (0, index_1.successCode)(res, checkJobCatalog);
    }
    async updateJobCatalog(res, jobCatalog, id_job_catalog) {
        const checkJobCatalog = await this.prisma.jobCatalog.findFirst({
            where: {
                id_job_catalog: id_job_catalog
            }
        });
        if (!checkJobCatalog) {
            (0, index_1.errCode)(res, id_job_catalog, "Không tìm thấy danh mục công việc");
            return;
        }
        await this.prisma.jobCatalog.update({
            data: jobCatalog,
            where: {
                id_job_catalog: id_job_catalog
            }
        });
        (0, index_1.successCode)(res, jobCatalog);
    }
    async deleteJobCatalog(res, id_job_catalog) {
        const chekcJobCatalog = await this.prisma.jobCatalog.findFirst({
            where: {
                id_job_catalog: id_job_catalog
            }
        });
        if (!chekcJobCatalog) {
            (0, index_1.errCode)(res, id_job_catalog, "Không tìm thấy danh mục công việc");
            return;
        }
        await this.prisma.jobCatalog.delete({
            where: {
                id_job_catalog: id_job_catalog
            }
        });
        (0, index_1.successCode)(res, chekcJobCatalog);
    }
};
DanhMucCongViecService = __decorate([
    (0, common_1.Injectable)()
], DanhMucCongViecService);
exports.DanhMucCongViecService = DanhMucCongViecService;
//# sourceMappingURL=danh-muc-cong-viec.service.js.map