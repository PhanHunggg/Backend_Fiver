import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { SignUpInterface } from 'src/auth/interface';
import { errCode, failCode, successCode } from 'src/config/response';

@Injectable()
export class NguoiDungService {

    prisma = new PrismaClient();

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
                id_user: Number(id_user),
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
                    id_user: Number(id),
                }
            })


            if (!checkUser) errCode(res, user.email, "Không tìm thấy người dùng")

            if (!user.role) user.role = "NguoiDung"

            const newData: SignUpInterface = user

            newData.birth_day = new Date(user.birth_day)

            await this.prisma.user.update(
                {
                    data: newData,
                    where: {
                        id_user: checkUser.id_user
                    }
                }
            )
            successCode(res, newData)
        } catch (error) {

            failCode(res, error.message)
        }

    }
}
