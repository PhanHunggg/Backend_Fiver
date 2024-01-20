import { NguoiDungService } from './nguoi-dung.service';
import { SignUpInterface } from 'src/auth/interface';
export declare class NguoiDungController {
    private readonly userService;
    constructor(userService: NguoiDungService);
    getUserList(res: any): Promise<void>;
    findUser(res: any, id_user: string): Promise<void>;
    getTypeUser(res: any): Promise<void>;
    updateUser(res: any, body: SignUpInterface, id_user: string): Promise<void>;
}
