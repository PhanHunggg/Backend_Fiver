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
exports.ChiTietLoaiCongViecController = void 0;
const common_1 = require("@nestjs/common");
const chi_tiet_loai_cong_viec_service_1 = require("./chi-tiet-loai-cong-viec.service");
const interface_1 = require("./interface");
const swagger_1 = require("@nestjs/swagger");
let ChiTietLoaiCongViecController = class ChiTietLoaiCongViecController {
    constructor(typeDetailJobService) {
        this.typeDetailJobService = typeDetailJobService;
    }
    getTypeDetailJob(res) {
        return this.typeDetailJobService.getTypeDetailJob(res);
    }
    findTypeDetailJob(res, id_type_detail) {
        return this.typeDetailJobService.findTypeDetailJob(res, +id_type_detail);
    }
    createTypeDetailJob(res, body) {
        return this.typeDetailJobService.createTypeDetailJob(res, body);
    }
    updateTypeDetailJob(res, id_type_detail, body) {
        return this.typeDetailJobService.updateTypeDetailJob(res, body, +id_type_detail);
    }
    deleteTypeDetail(res, id_type_detail) {
        return this.typeDetailJobService.deleteTypeDetail(res, +id_type_detail);
    }
};
__decorate([
    (0, common_1.Get)("/danh-sach-chi-tiet-loai-cong-viec"),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChiTietLoaiCongViecController.prototype, "getTypeDetailJob", null);
__decorate([
    (0, common_1.Get)("/tim-kiem-chi-tiet-loai-cong-viec/:id_type_detail"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)("id_type_detail")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ChiTietLoaiCongViecController.prototype, "findTypeDetailJob", null);
__decorate([
    (0, common_1.Post)("/them-chi-tiet-loai-cong-viec"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, interface_1.TypeDetailInterface]),
    __metadata("design:returntype", void 0)
], ChiTietLoaiCongViecController.prototype, "createTypeDetailJob", null);
__decorate([
    (0, common_1.Put)("/cap-nhat-chi-tiet-loai-cong-viec/:id_type_detail"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)('id_type_detail')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, interface_1.UpdateTypeDetailInterface]),
    __metadata("design:returntype", void 0)
], ChiTietLoaiCongViecController.prototype, "updateTypeDetailJob", null);
__decorate([
    (0, common_1.Delete)("/xoa-chi-tiet-loai/:id_type_detail"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)('id_type_detail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ChiTietLoaiCongViecController.prototype, "deleteTypeDetail", null);
ChiTietLoaiCongViecController = __decorate([
    (0, swagger_1.ApiTags)("ChiTietLoaiCongViec"),
    (0, common_1.Controller)('chi-tiet-loai-cong-viec'),
    __metadata("design:paramtypes", [chi_tiet_loai_cong_viec_service_1.ChiTietLoaiCongViecService])
], ChiTietLoaiCongViecController);
exports.ChiTietLoaiCongViecController = ChiTietLoaiCongViecController;
//# sourceMappingURL=chi-tiet-loai-cong-viec.controller.js.map