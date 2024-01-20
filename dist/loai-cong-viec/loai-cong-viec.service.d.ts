import { PrismaClient } from '@prisma/client';
import { createTypeJobInterface } from './interface';
export declare class LoaiCongViecService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getTypeJobList(res: any): Promise<void>;
    getJobNavBar(res: any): Promise<void>;
    findTypeJob(res: any, id_type_job: number): Promise<void>;
    createTypeJob(res: any, createTypeJob: createTypeJobInterface): Promise<void>;
    updateTypeJob(res: any, typeJob: createTypeJobInterface, id_type_job: number): Promise<void>;
}
