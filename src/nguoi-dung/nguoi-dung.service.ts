import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { SignUpInterface } from 'src/auth/interface';
import { errCode, failCode, successCode } from '../response/index';
import * as bcrypt from 'bcrypt';

@Injectable()
export class NguoiDungService {

    prisma = new PrismaClient();

    hashData(data: string) {
        return bcrypt.hash(data, 10);
    }

    async getUserList(res: any) {
        try {
            const userList = await this.prisma.user.findMany()

            successCode(res, userList)
        } catch (error) {
            failCode(res, error.message)
        }
    }

    async findUser(res: any, id_user: string) {
        const checkUser = await this.prisma.user.findFirst({
            where: {
                id_user: id_user,
            }
        })

        if (!checkUser) {
            errCode(res, id_user, "Không tìm thấy người dùng")
            return
        }

        successCode(res, checkUser)
    }

    async getTypeUser(res: any) {
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
            ]

            successCode(res, data)
        } catch (error) {
            failCode(res, error.message)
        }
    }

    async updateUser(res: any, user: SignUpInterface, id: string) {
        try {
            const checkUser = await this.prisma.user.findFirst({
                where: {
                    id_user: id,
                }
            })


            if (!checkUser) errCode(res, user.email, "Không tìm thấy người dùng")

            if (!user.role) user.role = "NguoiDung"


            if (typeof user.birth_day === "string") {
                user.birth_day = new Date(user.birth_day)
            }

            if (user.gender === "false") {
                user.gender = false
            } else {
                user.gender = true
            }

            const hash = await this.hashData(user.password);

            await this.prisma.user.update(
                {
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
                }
            )
            successCode(res, user)
        } catch (error) {

            failCode(res, error.message)
        }

    }
}
