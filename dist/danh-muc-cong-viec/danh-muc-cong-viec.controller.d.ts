import { DanhMucCongViecService } from './danh-muc-cong-viec.service';
import { JobCatalogInterface } from './interface';
export declare class DanhMucCongViecController {
    private readonly jobCatalogService;
    constructor(jobCatalogService: DanhMucCongViecService);
    getJobCatalog(res: any): Promise<void>;
    findJobCatalog(res: any, id_job_catalog: string): Promise<void>;
    createJobCatalog(res: any, body: JobCatalogInterface): Promise<void>;
    updateJobCatalog(res: any, body: JobCatalogInterface, id_job_catalog: string): Promise<void>;
    deleteJobCatalog(res: any, id_job_catalog: string): Promise<void>;
}
