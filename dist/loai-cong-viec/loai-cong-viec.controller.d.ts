import { LoaiCongViecService } from './loai-cong-viec.service';
import { createTypeJobInterface } from './interface';
export declare class LoaiCongViecController {
    private readonly typeJobService;
    constructor(typeJobService: LoaiCongViecService);
    getTypeJobList(res: any): Promise<void>;
    findTypeJob(res: any, id_type_job: string): Promise<void>;
    getJobNavBar(res: any): Promise<void>;
    createTypeJob(res: any, body: createTypeJobInterface): Promise<void>;
    updateTypeJob(res: any, body: createTypeJobInterface, id_type_job: string): Promise<void>;
}
