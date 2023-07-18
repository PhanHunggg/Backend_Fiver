import { failCode } from 'src/config/response';
import { NguoiDungService } from './nguoi-dung.service';
import { Controller, Get, Response, Put, Post, Body, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SignUpInterface } from 'src/auth/interface';
import { FileUploadDto } from 'src/auth/dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

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
            return this.userService.findUser(res, id_user);
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

    @Put("/cap-nhat-nguoi-dung/:id")
    updateUser(@Response() res: any, @Body() body: SignUpInterface, @Param("id") id: string) {
        try {
            return this.userService.updateUser(res, body, id);
        } catch (error) {
            failCode(res, error.message)

        }
    }



}
