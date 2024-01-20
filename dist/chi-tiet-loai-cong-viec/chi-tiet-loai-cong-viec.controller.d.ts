import { ChiTietLoaiCongViecService } from './chi-tiet-loai-cong-viec.service';
import { TypeDetailInterface, UpdateTypeDetailInterface } from './interface';
export declare class ChiTietLoaiCongViecController {
    private readonly typeDetailJobService;
    constructor(typeDetailJobService: ChiTietLoaiCongViecService);
    getTypeDetailJob(res: any): Promise<void>;
    findTypeDetailJob(res: any, id_type_detail: string): Promise<void>;
    createTypeDetailJob(res: any, body: TypeDetailInterface): Promise<void>;
    updateTypeDetailJob(res: any, id_type_detail: string, body: UpdateTypeDetailInterface): Promise<void>;
    deleteTypeDetail(res: any, id_type_detail: string): Promise<void>;
}
