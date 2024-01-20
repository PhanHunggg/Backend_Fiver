import { PrismaClient } from '@prisma/client';
import { SignUpInterface } from 'src/auth/interface';
export declare class NguoiDungService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    hashData(data: string): Promise<string>;
    getUserList(res: any): Promise<void>;
    findUser(res: any, id_user: number): Promise<void>;
    getTypeUser(res: any): Promise<void>;
    updateUser(res: any, user: SignUpInterface, id_user: number): Promise<void>;
}
