import { PrismaClient } from '@prisma/client';
import { HireJobInterface } from './interface';
export declare class ThueCongViecService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getHireJobList(res: any): Promise<void>;
    findHireJob(id_hire_job: number, res: any): Promise<void>;
    createHireJob(res: any, hireJob: HireJobInterface): Promise<void>;
    deleteHireJob(res: any, id_hire_job: number): Promise<void>;
}
