"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChiTietLoaiCongViecModule = void 0;
const common_1 = require("@nestjs/common");
const chi_tiet_loai_cong_viec_service_1 = require("./chi-tiet-loai-cong-viec.service");
const chi_tiet_loai_cong_viec_controller_1 = require("./chi-tiet-loai-cong-viec.controller");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let ChiTietLoaiCongViecModule = class ChiTietLoaiCongViecModule {
};
ChiTietLoaiCongViecModule = __decorate([
    (0, common_1.Module)({
        providers: [chi_tiet_loai_cong_viec_service_1.ChiTietLoaiCongViecService, cloudinary_service_1.CloudinaryService],
        controllers: [chi_tiet_loai_cong_viec_controller_1.ChiTietLoaiCongViecController]
    })
], ChiTietLoaiCongViecModule);
exports.ChiTietLoaiCongViecModule = ChiTietLoaiCongViecModule;
//# sourceMappingURL=chi-tiet-loai-cong-viec.module.js.map