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
exports.NguoiDungController = void 0;
const index_1 = require("../response/index");
const nguoi_dung_service_1 = require("./nguoi-dung.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const interface_1 = require("../auth/interface");
let NguoiDungController = class NguoiDungController {
    constructor(userService) {
        this.userService = userService;
    }
    getUserList(res) {
        try {
            return this.userService.getUserList(res);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    findUser(res, id_user) {
        try {
            return this.userService.findUser(res, +id_user);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    getTypeUser(res) {
        try {
            return this.userService.getTypeUser(res);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    updateUser(res, body, id_user) {
        try {
            return this.userService.updateUser(res, body, +id_user);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
};
__decorate([
    (0, common_1.Get)("/lay-danh-sach-nguoi-dung"),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NguoiDungController.prototype, "getUserList", null);
__decorate([
    (0, common_1.Get)("/tim-kiem-nguoi-dung/:id_user"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)("id_user")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], NguoiDungController.prototype, "findUser", null);
__decorate([
    (0, common_1.Get)("/loai-nguoi-dung"),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NguoiDungController.prototype, "getTypeUser", null);
__decorate([
    (0, common_1.Put)("/cap-nhat-nguoi-dung/:id_user"),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)("id_user")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, interface_1.SignUpInterface, String]),
    __metadata("design:returntype", void 0)
], NguoiDungController.prototype, "updateUser", null);
NguoiDungController = __decorate([
    (0, swagger_1.ApiTags)("NguoiDung"),
    (0, common_1.Controller)('nguoi-dung'),
    __metadata("design:paramtypes", [nguoi_dung_service_1.NguoiDungService])
], NguoiDungController);
exports.NguoiDungController = NguoiDungController;
//# sourceMappingURL=nguoi-dung.controller.js.map