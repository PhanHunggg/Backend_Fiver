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
exports.ChiTietLoaiCongViecService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const index_1 = require("../response/index");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let ChiTietLoaiCongViecService = class ChiTietLoaiCongViecService {
    constructor(cloudinary) {
        this.cloudinary = cloudinary;
        this.prisma = new client_1.PrismaClient();
    }
    async createTypeDetailJob(res, job) {
        const typeDetailJobList = await this.prisma.typeDetail.findMany();
        let isValid = false;
        typeDetailJobList.forEach(ele => {
            if (ele.detail_name.toLocaleLowerCase().trim() === job.detail_name.toLocaleLowerCase().trim())
                isValid = true;
        });
        if (isValid) {
            (0, index_1.errCode)(res, job.detail_name, "Loại công việc đã tồn tại");
            return;
        }
        const { detail_name, id_type_job } = job;
        await this.prisma.typeDetail.create({
            data: {
                detail_name,
                typeJob: {
                    connect: {
                        id_type_job: id_type_job
                    }
                }
            }
        });
        (0, index_1.successCode)(res, job);
    }
    async getTypeDetailJob(res) {
        const checkTypeDetail = await this.prisma.typeDetail.findMany();
        if (!checkTypeDetail) {
            (0, index_1.errCode)(res, checkTypeDetail, "Không có chi loại công việc");
            return;
        }
        (0, index_1.successCode)(res, checkTypeDetail);
    }
    async findTypeDetailJob(res, id_type_detail) {
        const checkTypeDetail = await this.prisma.typeDetail.findFirst({
            where: {
                id_type_detail: id_type_detail
            }
        });
        if (!checkTypeDetail) {
            (0, index_1.errCode)(res, id_type_detail, "Không tìm thấy chi tiết loại công việc");
            return;
        }
        (0, index_1.successCode)(res, checkTypeDetail);
    }
    async updateTypeDetailJob(res, type_detail, id_type_detail) {
        const checkTypeDetail = await this.prisma.typeDetail.findFirst({
            where: {
                id_type_detail: id_type_detail
            }
        });
        if (!checkTypeDetail) {
            (0, index_1.errCode)(res, id_type_detail, "Không tìm thấy chi tiết loại công việc");
            return;
        }
        await this.prisma.typeDetail.update({
            data: {
                detail_name: type_detail.detail_name,
                typeJob: {
                    connect: {
                        id_type_job: type_detail.id_type_job
                    }
                }
            },
            where: {
                id_type_detail: id_type_detail
            }
        });
        (0, index_1.successCode)(res, type_detail);
    }
    async deleteTypeDetail(res, id_type_detail) {
        const checkTypeDetail = await this.prisma.typeDetail.findFirst({
            where: {
                id_type_detail: id_type_detail
            }
        });
        if (!checkTypeDetail) {
            (0, index_1.errCode)(res, id_type_detail, "Không tìm thấy chi tiết loại");
            return;
        }
        await this.prisma.typeDetail.delete({
            where: {
                id_type_detail: id_type_detail
            }
        });
        (0, index_1.successCode)(res, checkTypeDetail);
    }
};
ChiTietLoaiCongViecService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cloudinary_service_1.CloudinaryService])
], ChiTietLoaiCongViecService);
exports.ChiTietLoaiCongViecService = ChiTietLoaiCongViecService;
//# sourceMappingURL=chi-tiet-loai-cong-viec.service.js.map