/// <reference types="multer" />
import { PrismaClient } from '@prisma/client';
import { JobInterface } from './interface';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
export declare class CongViecService {
    private cloudinary;
    constructor(cloudinary: CloudinaryService);
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getJobList(res: any): Promise<void>;
    findJob(res: any, id_job: number): Promise<void>;
    findJobByJobType(res: any, id_type_job: number): Promise<void>;
    findJobByTypeDetail(res: any, id_type_detail: number): Promise<void>;
    findJobByJobCatalog(res: any, id_job_catalog: number): Promise<void>;
    createJob(res: any, image: Express.Multer.File, job: JobInterface): Promise<void>;
    updateJob(res: any, job: JobInterface, id_job: number): Promise<void>;
    updateImgJob(res: any, id_job: number, file: Express.Multer.File): Promise<void>;
    deleteJob(res: any, id_job: number): Promise<void>;
}
