import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { LoginInterFace, SignUpInterface } from './interface';
import { errCode, failCode, successCode } from 'src/config/response';
import { UserDto } from './dto';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private config: ConfigService
    ) { }

    prisma = new PrismaClient();

    async login(res: any, user: LoginInterFace) {
        try {
            const checkUser = await this.prisma.user.findFirst({
                where: {
                    email: user.email
                }
            })

            if (!checkUser) errCode(res, user.email, "Không tìm thấy tài khoản")

            if (checkUser.password !== user.password) errCode(res, user.password, "Mật khẩu không đúng");

            const token = this.jwtService.sign({ data: checkUser }, { secret: this.config.get("SECRET_KEY"), expiresIn: "30m" })

            let data: UserDto = checkUser

            data.accessToken = token;

            successCode(res, data)
        } catch (error) {
            failCode(res, error.message)
        }
    }

    async signUp(res: any, user: SignUpInterface) {
        try {
            const checkEmail = await this.prisma.user.findFirst({
                where: {
                    email: user.email
                }
            })

            if (checkEmail) errCode(res, user.email, "Email đã tồn tại")

            if (!user.role) user.role = "NguoiDung"

            const newData: SignUpInterface = user

            newData.birth_day = new Date(user.birth_day)

            await this.prisma.user.create({
                data: newData
            })
            successCode(res, user)

        } catch (error) {

            failCode(res, error.message)

        }
    }
}
