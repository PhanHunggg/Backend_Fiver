import { Body, Controller, Get, Param, Post, Put, Response } from '@nestjs/common';
import { LoaiCongViecService } from './loai-cong-viec.service';
import { createTypeJobInterface } from './interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("LoaiCongViec")
@Controller('loai-cong-viec')
export class LoaiCongViecController {
    constructor(private readonly typeJobService: LoaiCongViecService) { }

    @Get("/danh-sach-loai-cong-viec")
    getTypeJobList(@Response() res: any) {
        return this.typeJobService.getTypeJobList(res);
    }

    @Get("/tim-kiem-loai-cong-viec/:id_type_job")
    findTypeJob(@Response() res: any, @Param("id_type_job") id_type_job: string) {
        return this.typeJobService.findTypeJob(res, +id_type_job)
    }

    @Post("/tao-loai-cong-viec")
    createTypeJob(@Response() res: any, @Body() body: createTypeJobInterface) {
        return this.typeJobService.createTypeJob(res, body);
    }

    @Put("/cap-nhat-loai-cong-viec/:id_type_job")
    updateTypeJob(@Response() res: any, @Body() body: createTypeJobInterface, @Param('id_type_job') id_type_job: string) {

        return this.typeJobService.updateTypeJob(res, body, +id_type_job);

    }
}
