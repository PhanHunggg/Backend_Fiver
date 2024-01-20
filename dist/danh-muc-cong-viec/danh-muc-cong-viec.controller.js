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
exports.DanhMucCongViecController = void 0;
const common_1 = require("@nestjs/common");
const danh_muc_cong_viec_service_1 = require("./danh-muc-cong-viec.service");
const swagger_1 = require("@nestjs/swagger");
const interface_1 = require("./interface");
let DanhMucCongViecController = class DanhMucCongViecController {
    constructor(jobCatalogService) {
        this.jobCatalogService = jobCatalogService;
    }
    getJobCatalog(res) {
        return this.jobCatalogService.getJobCatalog(res);
    }
    findJobCatalog(res, id_job_catalog) {
        return this.jobCatalogService.findJobCatalog(res, +id_job_catalog);
    }
    createJobCatalog(res, body) {
        return this.jobCatalogService.createJobCatalog(res, body);
    }
    updateJobCatalog(res, body, id_job_catalog) {
        return this.jobCatalogService.updateJobCatalog(res, body, +id_job_catalog);
    }
    deleteJobCatalog(res, id_job_catalog) {
        return this.jobCatalogService.deleteJobCatalog(res, +id_job_catalog);
    }
};
__decorate([
    (0, common_1.Get)("/danh-sach-danh-muc-cong-viec"),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DanhMucCongViecController.prototype, "getJobCatalog", null);
__decorate([
    (0, common_1.Get)("/tim-kiem-danh-muc-cong-viec/:id_job_catalog"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)('id_job_catalog')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DanhMucCongViecController.prototype, "findJobCatalog", null);
__decorate([
    (0, common_1.Post)("/them-danh-muc-cong-viec"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, interface_1.JobCatalogInterface]),
    __metadata("design:returntype", void 0)
], DanhMucCongViecController.prototype, "createJobCatalog", null);
__decorate([
    (0, common_1.Put)("/cap-nhat-danh-muc-cong-viec/:id_job_catalog"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id_job_catalog')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, interface_1.JobCatalogInterface, String]),
    __metadata("design:returntype", void 0)
], DanhMucCongViecController.prototype, "updateJobCatalog", null);
__decorate([
    (0, common_1.Delete)("/xoa-danh-muc-cong-viec/:id_job_catalog"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)('id_job_catalog')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DanhMucCongViecController.prototype, "deleteJobCatalog", null);
DanhMucCongViecController = __decorate([
    (0, common_1.Controller)('danh-muc-cong-viec'),
    (0, swagger_1.ApiTags)("DanhMucCongViec"),
    __metadata("design:paramtypes", [danh_muc_cong_viec_service_1.DanhMucCongViecService])
], DanhMucCongViecController);
exports.DanhMucCongViecController = DanhMucCongViecController;
//# sourceMappingURL=danh-muc-cong-viec.controller.js.map