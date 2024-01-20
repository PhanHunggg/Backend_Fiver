import { PrismaClient } from '@prisma/client';
import { TypeDetailInterface, UpdateTypeDetailInterface } from './interface';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class ChiTietLoaiCongViecService {
    private cloudinary;
    constructor(cloudinary: CloudinaryService);
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createTypeDetailJob(res: any, job: TypeDetailInterface): Promise<void>;
    getTypeDetailJob(res: any): Promise<void>;
    findTypeDetailJob(res: any, id_type_detail: number): Promise<void>;
    updateTypeDetailJob(res: any, type_detail: UpdateTypeDetailInterface, id_type_detail: number): Promise<void>;
    deleteTypeDetail(res: any, id_type_detail: number): Promise<void>;
}
