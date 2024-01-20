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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const index_1 = require("../response/index");
let AuthService = class AuthService {
    constructor(jwtService, config) {
        this.jwtService = jwtService;
        this.config = config;
        this.prisma = new client_1.PrismaClient();
    }
    async login(res, user) {
        try {
            const checkUser = await this.prisma.user.findFirst({
                where: {
                    email: user.email
                }
            });
            if (!checkUser) {
                (0, index_1.errCode)(res, user.email, "Không tìm thấy tài khoản");
                return;
            }
            if (checkUser.password !== user.password) {
                (0, index_1.errCode)(res, user.password, "Mật khẩu không đúng!");
                return;
            }
            const passwordMatches = await bcrypt.compare(checkUser.password, checkUser.hash);
            if (!passwordMatches)
                throw new common_1.ForbiddenException('Access Denied');
            const tokens = await this.getTokens(checkUser);
            await this.updateRtHash(res, checkUser.id_user, tokens.refreshToken);
            (0, index_1.successCode)(res, tokens);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    async signUp(res, user) {
        try {
            const checkEmail = await this.prisma.user.findFirst({
                where: {
                    email: user.email
                }
            });
            if (checkEmail) {
                (0, index_1.errCode)(res, user.email, "Email đã tồn tại");
                return;
            }
            if (!user.role)
                user.role = "NguoiDung";
            const hash = await this.hashData(user.password);
            if (typeof user.birth_day === "string") {
                user.birth_day = new Date(user.birth_day);
            }
            let gender;
            if (user.gender === "false" || user.gender === false) {
                gender = false;
            }
            else {
                gender = true;
            }
            const newUser = await this.prisma.user.create({
                data: Object.assign(Object.assign({}, user), { gender, hash: hash })
            });
            const tokens = await this.getTokens(newUser);
            await this.updateRtHash(res, newUser.id_user, tokens.refreshToken);
            (0, index_1.successCode)(res, { tokens, user });
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    async logout(res, userId) {
        await this.prisma.user.updateMany({
            where: {
                id_user: userId,
                hashedRt: {
                    not: null,
                },
            },
            data: {
                hashedRt: null,
            },
        });
        (0, index_1.successCode)(res, userId);
    }
    async profile(res, userId) {
        try {
            const checkUser = await this.prisma.user.findUnique({
                where: {
                    id_user: userId
                }
            });
            if (!checkUser) {
                (0, index_1.errCode)(res, '', "Không tìm thấy user!");
                return;
            }
            const user = {
                id_user: checkUser.id_user,
                name: checkUser.name,
                email: checkUser.email,
                birth_day: checkUser.birth_day,
                gender: checkUser.gender,
                phone: checkUser.phone,
                skill: checkUser.skill,
                certification: checkUser.certification
            };
            (0, index_1.successCode)(res, user);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    async refreshTokens(res, rt) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id_user: rt.userId,
                },
            });
            if (!user || !user.hashedRt)
                throw new common_1.ForbiddenException('Access Denied');
            const rtMatches = await bcrypt.compare(rt.refreshToken, user.hashedRt);
            if (!rtMatches)
                throw new common_1.ForbiddenException('Access Denied');
            const tokens = await this.getTokens(user);
            await this.updateRtHash(res, user.id_user, tokens.refreshToken);
            (0, index_1.successCode)(res, tokens);
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    async updateRtHash(res, userId, rt) {
        try {
            const hash = await this.hashData(rt);
            await this.prisma.user.update({
                where: {
                    id_user: userId
                },
                data: {
                    hashedRt: hash
                }
            });
        }
        catch (error) {
            (0, index_1.failCode)(res, error.message);
        }
    }
    hashData(data) {
        return bcrypt.hash(data, 10);
    }
    async getTokens(payload) {
        const data = {
            id_user: payload.id_user,
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            birth_day: payload.birth_day,
            gender: payload.gender,
            skill: payload.skill,
            certification: payload.certification
        };
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync(data, {
                secret: this.config.get('AT_SECRET'),
                expiresIn: '3d',
            }),
            this.jwtService.signAsync(data, {
                secret: this.config.get('RT_SECRET'),
                expiresIn: '7d',
            }),
        ]);
        return {
            accessToken: at,
            refreshToken: rt
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map