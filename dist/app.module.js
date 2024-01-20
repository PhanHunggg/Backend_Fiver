"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const binh_luan_module_1 = require("./binh-luan/binh-luan.module");
const chi_tiet_loai_cong_viec_module_1 = require("./chi-tiet-loai-cong-viec/chi-tiet-loai-cong-viec.module");
const cong_viec_module_1 = require("./cong-viec/cong-viec.module");
const loai_cong_viec_module_1 = require("./loai-cong-viec/loai-cong-viec.module");
const nguoi_dung_module_1 = require("./nguoi-dung/nguoi-dung.module");
const skill_module_1 = require("./skill/skill.module");
const thue_cong_viec_module_1 = require("./thue-cong-viec/thue-cong-viec.module");
const config_1 = require("@nestjs/config");
const danh_muc_cong_viec_module_1 = require("./danh-muc-cong-viec/danh-muc-cong-viec.module");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, binh_luan_module_1.BinhLuanModule, chi_tiet_loai_cong_viec_module_1.ChiTietLoaiCongViecModule, cong_viec_module_1.CongViecModule, loai_cong_viec_module_1.LoaiCongViecModule, nguoi_dung_module_1.NguoiDungModule, skill_module_1.SkillModule, thue_cong_viec_module_1.ThueCongViecModule, config_1.ConfigModule.forRoot({ isGlobal: true }), danh_muc_cong_viec_module_1.DanhMucCongViecModule, cloudinary_module_1.CloudinaryModule, serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'swagger-static'),
                serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
            }),],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map