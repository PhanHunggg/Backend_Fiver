import { FileInterceptor } from '@nestjs/platform-express';
import { Body, Controller, Delete, Get, Param, Post, Put, Response, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ChiTietLoaiCongViecService } from './chi-tiet-loai-cong-viec.service';
import { diskStorage } from 'multer';
import { TypeDetailInterface, UpdateTypeDetailInterface } from './interface';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileUploadDto } from '../auth/dto/index';

@ApiTags("ChiTietLoaiCongViec")
@Controller('chi-tiet-loai-cong-viec')
export class ChiTietLoaiCongViecController {
    constructor(private readonly typeDetailJobService: ChiTietLoaiCongViecService) { }


    @Get("/danh-sach-chi-tiet-loai-cong-viec")
    getTypeDetailJob(@Response() res: any) {
        return this.typeDetailJobService.getTypeDetailJob(res)
    }

    @Get("/tim-kiem-chi-tiet-loai-cong-viec/:id_type_detail")
    findTypeDetailJob(@Response() res: any, @Param("id_type_detail") id_type_detail: string) {
        return this.typeDetailJobService.findTypeDetailJob(res, id_type_detail)
    }


    @Post("/them-chi-tiet-loai-cong-viec")
    @UseInterceptors(FileInterceptor('image'))
    createTypeDetailJob(@Response() res: any, @Body() body: TypeDetailInterface, @UploadedFile() file: Express.Multer.File) {
        return this.typeDetailJobService.createTypeDetailJob(res, body, file);

    }

    @Put("/cap-nhat-chi-tiet-loai-cong-viec/:id_type_detail")
    updateTypeDetailJob(@Response() res: any, @Param('id_type_detail') id_type_detail: string, @Body() body: UpdateTypeDetailInterface) {
        return this.typeDetailJobService.updateTypeDetailJob(res, body, id_type_detail);
    }

    @Put("/cap-nhat-hinh-anh-chi-tiet-loai/:id_type_detail")
    @ApiConsumes("multipart/form-data")
    @ApiBody({
        description: "Upload image type details",
        type: FileUploadDto
    })
    @UseInterceptors(FileInterceptor('image'))
    updateImgTypeDetail(@Response() res: any, @Param('id_type_detail') id_type_detail: string, @UploadedFile() file: Express.Multer.File) {
        return this.typeDetailJobService.updateImgTypeDetail(res, id_type_detail, file)
    }

    @Delete("/xoa-chi-tiet-loai/:id_type_detail")
    deleteTypeDetail(@Response() res: any, @Param('id_type_detail') id_type_detail: string) {

        return this.typeDetailJobService.deleteTypeDetail(res, id_type_detail)
    }

    

}
