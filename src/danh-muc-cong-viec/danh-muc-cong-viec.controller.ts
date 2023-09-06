import { Body, Controller, Delete, Get, Param, Post, Put, Response } from '@nestjs/common';
import { DanhMucCongViecService } from './danh-muc-cong-viec.service';
import { ApiTags } from '@nestjs/swagger';
import { JobCatalogInterface } from './interface';

@Controller('danh-muc-cong-viec')
@ApiTags("DanhMucCongViec")
export class DanhMucCongViecController {
  constructor(private readonly jobCatalogService: DanhMucCongViecService) { }


  @Get("/danh-sach-danh-muc-cong-viec")
  getJobCatalog(@Response() res: any) {
    return this.jobCatalogService.getJobCatalog(res);
  }


  @Get("/tim-kiem-danh-muc-cong-viec/:id_job_catalog")
  findJobCatalog(@Response() res: any, @Param('id_job_catalog') id_job_catalog: string) {
    return this.jobCatalogService.findJobCatalog(res, id_job_catalog);
  }

  @Post("/them-danh-muc-cong-viec")
  createJobCatalog(@Response() res: any, @Body() body: JobCatalogInterface) {

    return this.jobCatalogService.createJobCatalog(res, body)
  }

  @Put("/cap-nhat-danh-muc-cong-viec/:id_job_catalog")
  updateJobCatalog(@Response() res: any, @Body() body: JobCatalogInterface, @Param('id_job_catalog') id_job_catalog: string) {
    return this.jobCatalogService.updateJobCatalog(res, body, id_job_catalog)
  }

  @Delete("/xoa-danh-muc-cong-viec/:id_job_catalog")
  deleteJobCatalog(@Response() res: any, @Param('id_job_catalog') id_job_catalog: string) {
    return this.jobCatalogService.deleteJobCatalog(res, id_job_catalog)
  }
}
