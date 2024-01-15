import { DateTime } from 'luxon';
import { } from 'rxjs';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { LoginInterFace, SignUpInterface, refreshTokensInterface } from './interface';
import { UserProfile, UserSignUpDto } from './dto';
import * as bcrypt from 'bcrypt';
import { JwtPayload, Tokens } from './types';
import { errCode, failCode, successCode } from '../response/index';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private config: ConfigService
    ) { }

    prisma = new PrismaClient();

    async login(res: any, user: LoginInterFace): Promise<Tokens> {
        try {
            const checkUser = await this.prisma.user.findFirst({
                where: {
                    email: user.email
                }
            })

            if (!checkUser) {
                errCode(res, user.email, "Không tìm thấy tài khoản");
                return
            }

            if (checkUser.password !== user.password) {
                errCode(res, user.password, "Mật khẩu không đúng!");
                return
            }

            const passwordMatches = await bcrypt.compare(checkUser.password, checkUser.hash)

            if (!passwordMatches) throw new ForbiddenException('Access Denied');

            const tokens = await this.getTokens(checkUser)

            await this.updateRtHash(checkUser.id_user, tokens.refreshToken)

            successCode(res, tokens)


        } catch (error) {
            failCode(res, error.message)
        }
    }



    async signUp(res: any, user: SignUpInterface): Promise<Tokens> {
        try {
            const checkEmail = await this.prisma.user.findFirst({
                where: {
                    email: user.email
                }
            });

            if (checkEmail) {
                errCode(res, user.email, "Email đã tồn tại");
                return;
            }

            if (!user.role) user.role = "NguoiDung";

            const hash = await this.hashData(user.password);

            if (typeof user.birth_day === "string") {
                user.birth_day = new Date(user.birth_day)
            }

            if (user.gender === "false") {
                user.gender = false
            } else {
                user.gender = true
            }

            const newUser = await this.prisma.user.create({
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
                }
            });

            const tokens = await this.getTokens(newUser);

            await this.updateRtHash(newUser.id_user, tokens.refreshToken);

            successCode(res, tokens);
        } catch (error) {
            failCode(res, error.message);
        }
    }



    async logout(res: any, userId: string): Promise<void> {
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

        successCode(res, userId)
    }

    async profile(res: any, userId: string): Promise<void> {
        try {
            const checkUser = await this.prisma.user.findUnique({
                where: {
                    id_user: userId
                }
            })

            if (!checkUser) {
                errCode(res, '', "Không tìm thấy user!");
                return
            }

            const user: UserProfile = {
                id_user: checkUser.id_user,
                name: checkUser.name,
                email: checkUser.email,
                birth_day: checkUser.birth_day,
                gender: checkUser.gender,
                phone: checkUser.phone,
                skill: checkUser.skill,
                certification: checkUser.certification
            }

            successCode(res, user)
        } catch (error) {
            failCode(res, error.message);
        }
    }

    async refreshTokens(res, rt: refreshTokensInterface): Promise<Tokens> {
        const user = await this.prisma.user.findUnique({
            where: {
                id_user: rt.userId,
            },
        });
        if (!user || !user.hashedRt) throw new ForbiddenException('Access Denied');

        const rtMatches = await bcrypt.compare(rt.refreshToken, user.hashedRt);

        if (!rtMatches) throw new ForbiddenException('Access Denied');

        const tokens = await this.getTokens(user);

        await this.updateRtHash(user.id_user, tokens.refreshToken);

        successCode(res, tokens)
        return tokens
    }

    async updateRtHash(userId: string, rt: string) {
        const hash = await this.hashData(rt)
        await this.prisma.user.update({
            where: {
                id_user: userId
            },
            data: {
                hashedRt: hash
            }
        })
    }

    hashData(data: string) {
        return bcrypt.hash(data, 10);
    }

    async getTokens(payload: UserSignUpDto): Promise<Tokens> {

        const data: JwtPayload = {
            id_user: payload.id_user,
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            birth_day: payload.birth_day,
            gender: payload.gender,
            skill: payload.skill,
            certification: payload.certification
        }

        const [at, rt] = await Promise.all([
            this.jwtService.signAsync(data, {
                secret: this.config.get<string>('AT_SECRET'),
                expiresIn: '3d',
            }),
            this.jwtService.signAsync(data, {
                secret: this.config.get<string>('RT_SECRET'),
                expiresIn: '7d',
            }),
        ]);


        return {
            accessToken: at,
            refreshToken: rt
        };
    }


}
