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
exports.LoaiCongViecController = void 0;
const common_1 = require("@nestjs/common");
const loai_cong_viec_service_1 = require("./loai-cong-viec.service");
const interface_1 = require("./interface");
const swagger_1 = require("@nestjs/swagger");
let LoaiCongViecController = class LoaiCongViecController {
    constructor(typeJobService) {
        this.typeJobService = typeJobService;
    }
    getTypeJobList(res) {
        return this.typeJobService.getTypeJobList(res);
    }
    findTypeJob(res, id_type_job) {
        return this.typeJobService.findTypeJob(res, +id_type_job);
    }
    getJobNavBar(res) {
        return this.typeJobService.getJobNavBar(res);
    }
    createTypeJob(res, body) {
        return this.typeJobService.createTypeJob(res, body);
    }
    updateTypeJob(res, body, id_type_job) {
        return this.typeJobService.updateTypeJob(res, body, +id_type_job);
    }
};
__decorate([
    (0, common_1.Get)("/danh-sach-loai-cong-viec"),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LoaiCongViecController.prototype, "getTypeJobList", null);
__decorate([
    (0, common_1.Get)("/tim-kiem-loai-cong-viec/:id_type_job"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)("id_type_job")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], LoaiCongViecController.prototype, "findTypeJob", null);
__decorate([
    (0, common_1.Get)("/job-nav-bar"),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LoaiCongViecController.prototype, "getJobNavBar", null);
__decorate([
    (0, common_1.Post)("/tao-loai-cong-viec"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, interface_1.createTypeJobInterface]),
    __metadata("design:returntype", void 0)
], LoaiCongViecController.prototype, "createTypeJob", null);
__decorate([
    (0, common_1.Put)("/cap-nhat-loai-cong-viec/:id_type_job"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id_type_job')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, interface_1.createTypeJobInterface, String]),
    __metadata("design:returntype", void 0)
], LoaiCongViecController.prototype, "updateTypeJob", null);
LoaiCongViecController = __decorate([
    (0, swagger_1.ApiTags)("LoaiCongViec"),
    (0, common_1.Controller)('loai-cong-viec'),
    __metadata("design:paramtypes", [loai_cong_viec_service_1.LoaiCongViecService])
], LoaiCongViecController);
exports.LoaiCongViecController = LoaiCongViecController;
//# sourceMappingURL=loai-cong-viec.controller.js.map