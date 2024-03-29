"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanhMucCongViecModule = void 0;
const common_1 = require("@nestjs/common");
const danh_muc_cong_viec_service_1 = require("./danh-muc-cong-viec.service");
const danh_muc_cong_viec_controller_1 = require("./danh-muc-cong-viec.controller");
let DanhMucCongViecModule = class DanhMucCongViecModule {
};
DanhMucCongViecModule = __decorate([
    (0, common_1.Module)({
        controllers: [danh_muc_cong_viec_controller_1.DanhMucCongViecController],
        providers: [danh_muc_cong_viec_service_1.DanhMucCongViecService]
    })
], DanhMucCongViecModule);
exports.DanhMucCongViecModule = DanhMucCongViecModule;
//# sourceMappingURL=danh-muc-cong-viec.module.js.map