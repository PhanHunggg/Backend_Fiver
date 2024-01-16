import { Body, Controller, Delete, Get, Param, Post, Put, Response, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CongViecService } from './cong-viec.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { JobInterface } from './interface';
import {  ApiTags } from '@nestjs/swagger';

@ApiTags("CongViec")
@Controller('cong-viec')
export class CongViecController {
    constructor(private readonly jobService: CongViecService) { }

    @Get("/danh-sach-cong-viec")
    getJobList(@Response() res: any) {
        return this.jobService.getJobList(res);
    }

    @Get("/tim-kiem-cong-viec/:id_job")
    findJob(@Response() res: any, @Param("id_job") id_job: string) {
        return this.jobService.findJob(res, +id_job);
    }


    @Get("/tim-cong-viec-theo-loai-cong-viec/:id_type_job")
    findJobByJobType(@Response() res: any, @Param("id_type_job") id_type_job: string) {
        return this.jobService.findJobByJobType(res, +id_type_job);
    }


    @Get("/tim-cong-viec-theo-chi-tiet-loai-cong-viec/:id_type_detail")
    findJobByTypeDetail(@Response() res: any, @Param("id_type_detail") id_type_detail: string) {
        return this.jobService.findJobByTypeDetail(res, +id_type_detail);
    }

    @Get("/tim-cong-viec-theo-danh-muc-cong-viec/:id_job_catalog")
    findJobByJobCatalog(@Response() res: any, @Param("id_job_catalog") id_job_catalog: string) {
        return this.jobService.findJobByJobCatalog(res, +id_job_catalog);
    }


    @Post("/them-cong-viec")
    @UseInterceptors(FileInterceptor('image'))
    createJob(@Response() res: any, @UploadedFile() file: Express.Multer.File, @Body() body: JobInterface) {
        return this.jobService.createJob(res, file, body);
    }

    @Put("/cap-nhat-cong-viec/:id_job")
    updateJob(@Response() res: any, @Body() body: JobInterface, @Param('id_job') id_job: string) {
        return this.jobService.updateJob(res, body, +id_job);

    }

    @Put("/cap-nhat-hinh-anh-cong-viec/:id_job")
    @UseInterceptors(FileInterceptor('image'))
    updateImgJob(@Response() res: any, @Param('id_job') id_job: string, @UploadedFile() file: Express.Multer.File) {
        return this.jobService.updateImgJob(res, +id_job, file)
    }

    @Delete("/xoa-cong-viec/:id_job")
    deleteJob(@Response() res: any, @Param("id_job") id_job: string) {
        return this.jobService.deleteJob(res, +id_job);
    }
}
