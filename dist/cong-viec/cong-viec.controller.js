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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CongViecController = void 0;
const common_1 = require("@nestjs/common");
const cong_viec_service_1 = require("./cong-viec.service");
const platform_express_1 = require("@nestjs/platform-express");
const interface_1 = require("./interface");
const swagger_1 = require("@nestjs/swagger");
let CongViecController = class CongViecController {
    constructor(jobService) {
        this.jobService = jobService;
    }
    getJobList(res) {
        return this.jobService.getJobList(res);
    }
    findJob(res, id_job) {
        return this.jobService.findJob(res, +id_job);
    }
    findJobByJobType(res, id_type_job) {
        return this.jobService.findJobByJobType(res, +id_type_job);
    }
    findJobByTypeDetail(res, id_type_detail) {
        return this.jobService.findJobByTypeDetail(res, +id_type_detail);
    }
    findJobByJobCatalog(res, id_job_catalog) {
        return this.jobService.findJobByJobCatalog(res, +id_job_catalog);
    }
    createJob(res, file, body) {
        return this.jobService.createJob(res, file, body);
    }
    updateJob(res, body, id_job) {
        return this.jobService.updateJob(res, body, +id_job);
    }
    updateImgJob(res, id_job, file) {
        return this.jobService.updateImgJob(res, +id_job, file);
    }
    deleteJob(res, id_job) {
        return this.jobService.deleteJob(res, +id_job);
    }
};
__decorate([
    (0, common_1.Get)("/danh-sach-cong-viec"),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CongViecController.prototype, "getJobList", null);
__decorate([
    (0, common_1.Get)("/tim-kiem-cong-viec/:id_job"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)("id_job")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CongViecController.prototype, "findJob", null);
__decorate([
    (0, common_1.Get)("/tim-cong-viec-theo-loai-cong-viec/:id_type_job"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)("id_type_job")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CongViecController.prototype, "findJobByJobType", null);
__decorate([
    (0, common_1.Get)("/tim-cong-viec-theo-chi-tiet-loai-cong-viec/:id_type_detail"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)("id_type_detail")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CongViecController.prototype, "findJobByTypeDetail", null);
__decorate([
    (0, common_1.Get)("/tim-cong-viec-theo-danh-muc-cong-viec/:id_job_catalog"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)("id_job_catalog")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CongViecController.prototype, "findJobByJobCatalog", null);
__decorate([
    (0, common_1.Post)("/them-cong-viec"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, interface_1.JobInterface]),
    __metadata("design:returntype", void 0)
], CongViecController.prototype, "createJob", null);
__decorate([
    (0, common_1.Put)("/cap-nhat-cong-viec/:id_job"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id_job')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, interface_1.JobInterface, String]),
    __metadata("design:returntype", void 0)
], CongViecController.prototype, "updateJob", null);
__decorate([
    (0, common_1.Put)("/cap-nhat-hinh-anh-cong-viec/:id_job"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)('id_job')),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], CongViecController.prototype, "updateImgJob", null);
__decorate([
    (0, common_1.Delete)("/xoa-cong-viec/:id_job"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)("id_job")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CongViecController.prototype, "deleteJob", null);
CongViecController = __decorate([
    (0, swagger_1.ApiTags)("CongViec"),
    (0, common_1.Controller)('cong-viec'),
    __metadata("design:paramtypes", [cong_viec_service_1.CongViecService])
], CongViecController);
exports.CongViecController = CongViecController;
//# sourceMappingURL=cong-viec.controller.js.map