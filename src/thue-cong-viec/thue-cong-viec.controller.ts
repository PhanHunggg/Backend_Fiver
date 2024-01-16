import { Body, Controller, Get, Param, Post, Response, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ThueCongViecService } from './thue-cong-viec.service';
import { HireJobInterface } from './interface';
@ApiTags("ThueCongVIec")
@Controller('thue-cong-viec')
export class ThueCongViecController {
    constructor(private readonly hireJobService: ThueCongViecService) { }


    @Get("/danh-sach-cong-viec-da-thue")
    getHireJobList(@Response() res: any) {
        return this.hireJobService.getHireJobList(res);
    }

    @Get("/tim-kiem-cong-viec-da-duoc-thue/:id_hire_job")
    findHireJob(@Response() res: any, @Param("id_hire_job") id_hire_job: string) {
        return this.hireJobService.findHireJob(+id_hire_job, res);
    }

    @Post("/them-cong-viec-duoc-thue")
    createHireJob(@Response() res: any, @Body() body: HireJobInterface) {
        return this.hireJobService.createHireJob(res, body);
    }

    @Delete("/xoa-cong-viec-da-thue/:id_hire_job")
    deleteHireJob(@Response() res: any, @Param("id_hire_job") id_hire_job: string) {
        return this.hireJobService.deleteHireJob(res, +id_hire_job);
    }

}
