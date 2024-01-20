"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CongViecModule = void 0;
const common_1 = require("@nestjs/common");
const cong_viec_service_1 = require("./cong-viec.service");
const cong_viec_controller_1 = require("./cong-viec.controller");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let CongViecModule = class CongViecModule {
};
CongViecModule = __decorate([
    (0, common_1.Module)({
        providers: [cong_viec_service_1.CongViecService, cloudinary_service_1.CloudinaryService],
        controllers: [cong_viec_controller_1.CongViecController]
    })
], CongViecModule);
exports.CongViecModule = CongViecModule;
//# sourceMappingURL=cong-viec.module.js.map