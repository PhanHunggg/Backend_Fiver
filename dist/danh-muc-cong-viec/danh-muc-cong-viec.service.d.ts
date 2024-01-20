import { PrismaClient } from '@prisma/client';
import { JobCatalogInterface } from './interface';
export declare class DanhMucCongViecService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getJobCatalog(res: any): Promise<void>;
    createJobCatalog(res: any, jobCatalog: JobCatalogInterface): Promise<void>;
    findJobCatalog(res: any, id_job_catalog: number): Promise<void>;
    updateJobCatalog(res: any, jobCatalog: JobCatalogInterface, id_job_catalog: number): Promise<void>;
    deleteJobCatalog(res: any, id_job_catalog: number): Promise<void>;
}
