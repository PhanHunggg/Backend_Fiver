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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobInterface = void 0;
const swagger_1 = require("@nestjs/swagger");
class JobInterface {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "job_name", type: String }),
    __metadata("design:type", String)
], JobInterface.prototype, "job_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "rate", type: String }),
    __metadata("design:type", String)
], JobInterface.prototype, "rate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "salary", type: Number }),
    __metadata("design:type", Number)
], JobInterface.prototype, "salary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "describe", type: String }),
    __metadata("design:type", String)
], JobInterface.prototype, "describe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "short_description", type: String }),
    __metadata("design:type", String)
], JobInterface.prototype, "short_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "star", type: Number }),
    __metadata("design:type", Number)
], JobInterface.prototype, "star", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id_job_catalog", type: Number }),
    __metadata("design:type", Number)
], JobInterface.prototype, "id_job_catalog", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id_creator", type: Number }),
    __metadata("design:type", Number)
], JobInterface.prototype, "id_creator", void 0);
exports.JobInterface = JobInterface;
//# sourceMappingURL=index.js.map