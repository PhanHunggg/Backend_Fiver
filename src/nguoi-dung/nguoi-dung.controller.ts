import { failCode } from '../response/index';
import { NguoiDungService } from './nguoi-dung.service';
import { Controller, Get, Response, Put, Post, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignUpInterface } from 'src/auth/interface';


@ApiTags("NguoiDung")
@Controller('nguoi-dung')
export class NguoiDungController {

    constructor(private readonly userService: NguoiDungService) { }

    @Get("/lay-danh-sach-nguoi-dung")
    getUserList(@Response() res: any) {
        try {
            return this.userService.getUserList(res);
        } catch (error) {
            failCode(res, error.message)

        }
    }

    @Get("/tim-kiem-nguoi-dung/:id_user")
    findUser(@Response() res: any, @Param("id_user") id_user: string) {
        try {
            return this.userService.findUser(res, +id_user);
        } catch (error) {
            failCode(res, error.message)

        }
    }


    @Get("/loai-nguoi-dung")
    getTypeUser(@Response() res: any) {
        try {
            return this.userService.getTypeUser(res);
        } catch (error) {
            failCode(res, error.message)

        }
    }

    @Put("/cap-nhat-nguoi-dung/:id_user")
    updateUser(@Response() res: any, @Body() body: SignUpInterface, @Param("id_user") id_user: string) {
        try {
            return this.userService.updateUser(res, body, +id_user);
        } catch (error) {
            failCode(res, error.message)

        }
    }



}
