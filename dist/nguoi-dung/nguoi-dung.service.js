"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NguoiDungService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const index_1 = require("../response/index");
const bcrypt = require("bcrypt");
let NguoiDungService = class NguoiDungService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    hashData(data) {
        return bcrypt.hash(data, 10);
    }
    async getUserList(res) {
        try {
            const userList = await this.prisma.user.findMany();
            if (!userList) {
                (0, index_1.errCode)(res, userList, "Không tìm thấy người dùng");
                return;
            }
            (0, index_1.successCode)(res, userList);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    async findUser(res, id_user) {
        const checkUser = await this.prisma.user.findFirst({
            where: {
                id_user: id_user,
            }
        });
        if (!checkUser) {
            (0, index_1.errCode)(res, id_user, "Không tìm thấy người dùng");
            return;
        }
        (0, index_1.successCode)(res, checkUser);
    }
    async getTypeUser(res) {
        try {
            const data = [
                {
                    maLoaiNguoiDung: "admin",
                    tenLoaiNguoiDung: "Admin"
                },
                {
                    maLoaiNguoiDung: "nguoiDung",
                    tenLoaiNguoiDung: "Người Dùng"
                }
            ];
            (0, index_1.successCode)(res, data);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    async updateUser(res, user, id_user) {
        try {
            const checkUser = await this.prisma.user.findFirst({
                where: {
                    id_user: id_user,
                }
            });
            if (!checkUser)
                (0, index_1.errCode)(res, user.email, "Không tìm thấy người dùng");
            if (!user.role)
                user.role = "NguoiDung";
            if (typeof user.birth_day === "string") {
                user.birth_day = new Date(user.birth_day);
            }
            if (user.gender === "false") {
                user.gender = false;
            }
            else {
                user.gender = true;
            }
            const hash = await this.hashData(user.password);
            await this.prisma.user.update({
                data: {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    phone: user.phone,
                    birth_day: user.birth_day,
                    gender: user.gender,
                    role: user.role,
                    skill: user.skill,
                    certification: user.certification,
                    hash: hash
                },
                where: {
                    id_user: checkUser.id_user
                }
            });
            (0, index_1.successCode)(res, user);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
};
NguoiDungService = __decorate([
    (0, common_1.Injectable)()
], NguoiDungService);
exports.NguoiDungService = NguoiDungService;
//# sourceMappingURL=nguoi-dung.service.js.map