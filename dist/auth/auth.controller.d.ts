import { AuthService } from './auth.service';
import { LoginInterFace, SignUpInterface, refreshTokensInterface } from './interface';
import { Tokens } from './types';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    profile(userId: number, res: any): Promise<void>;
    login(res: any, body: LoginInterFace): Promise<Tokens>;
    signUp(res: any, body: SignUpInterface): Promise<Tokens>;
    logout(userId: number, res: any): Promise<void>;
    refreshTokens(res: any, body: refreshTokensInterface): Promise<void>;
}
