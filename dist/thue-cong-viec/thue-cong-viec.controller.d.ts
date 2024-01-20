import { ThueCongViecService } from './thue-cong-viec.service';
import { HireJobInterface } from './interface';
export declare class ThueCongViecController {
    private readonly hireJobService;
    constructor(hireJobService: ThueCongViecService);
    getHireJobList(res: any): Promise<void>;
    findHireJob(res: any, id_hire_job: string): Promise<void>;
    createHireJob(res: any, body: HireJobInterface): Promise<void>;
    deleteHireJob(res: any, id_hire_job: string): Promise<void>;
}
