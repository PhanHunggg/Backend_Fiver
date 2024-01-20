/// <reference types="multer" />
import { CongViecService } from './cong-viec.service';
import { JobInterface } from './interface';
export declare class CongViecController {
    private readonly jobService;
    constructor(jobService: CongViecService);
    getJobList(res: any): Promise<void>;
    findJob(res: any, id_job: string): Promise<void>;
    findJobByJobType(res: any, id_type_job: string): Promise<void>;
    findJobByTypeDetail(res: any, id_type_detail: string): Promise<void>;
    findJobByJobCatalog(res: any, id_job_catalog: string): Promise<void>;
    createJob(res: any, file: Express.Multer.File, body: JobInterface): Promise<void>;
    updateJob(res: any, body: JobInterface, id_job: string): Promise<void>;
    updateImgJob(res: any, id_job: string, file: Express.Multer.File): Promise<void>;
    deleteJob(res: any, id_job: string): Promise<void>;
}
