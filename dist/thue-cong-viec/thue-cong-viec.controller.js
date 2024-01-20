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
exports.ThueCongViecController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const thue_cong_viec_service_1 = require("./thue-cong-viec.service");
const interface_1 = require("./interface");
let ThueCongViecController = class ThueCongViecController {
    constructor(hireJobService) {
        this.hireJobService = hireJobService;
    }
    getHireJobList(res) {
        return this.hireJobService.getHireJobList(res);
    }
    findHireJob(res, id_hire_job) {
        return this.hireJobService.findHireJob(+id_hire_job, res);
    }
    createHireJob(res, body) {
        return this.hireJobService.createHireJob(res, body);
    }
    deleteHireJob(res, id_hire_job) {
        return this.hireJobService.deleteHireJob(res, +id_hire_job);
    }
};
__decorate([
    (0, common_1.Get)("/danh-sach-cong-viec-da-thue"),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ThueCongViecController.prototype, "getHireJobList", null);
__decorate([
    (0, common_1.Get)("/tim-kiem-cong-viec-da-duoc-thue/:id_hire_job"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)("id_hire_job")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ThueCongViecController.prototype, "findHireJob", null);
__decorate([
    (0, common_1.Post)("/them-cong-viec-duoc-thue"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, interface_1.HireJobInterface]),
    __metadata("design:returntype", void 0)
], ThueCongViecController.prototype, "createHireJob", null);
__decorate([
    (0, common_1.Delete)("/xoa-cong-viec-da-thue/:id_hire_job"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)("id_hire_job")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ThueCongViecController.prototype, "deleteHireJob", null);
ThueCongViecController = __decorate([
    (0, swagger_1.ApiTags)("ThueCongVIec"),
    (0, common_1.Controller)('thue-cong-viec'),
    __metadata("design:paramtypes", [thue_cong_viec_service_1.ThueCongViecService])
], ThueCongViecController);
exports.ThueCongViecController = ThueCongViecController;
//# sourceMappingURL=thue-cong-viec.controller.js.map