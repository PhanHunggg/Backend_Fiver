import { Body, Controller, Post, Response, UseInterceptors } from '@nestjs/common';
import { CongViecService } from './cong-viec.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JobInterface } from './interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("CongViec")
@Controller('cong-viec')
export class CongViecController {
    constructor(private readonly jobService: CongViecService) { }

    @Post("/them-cong-viec")
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: process.cwd() + "/public/img/job",
            filename: (req, file, callback) => callback(null, Date.now() + " " + file.originalname)
        })
    }))
    createJob(@Response() res: any, file: Express.Multer.File, @Body() body: JobInterface) {
        return this.jobService.createJob(res, file.filename, body);
    }
}
