import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { LoginInterFace, SignUpInterface, refreshTokensInterface } from './interface';
import { UserSignUpDto } from './dto';
import { Tokens } from './types';
export declare class AuthService {
    private jwtService;
    private config;
    constructor(jwtService: JwtService, config: ConfigService);
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    login(res: any, user: LoginInterFace): Promise<Tokens>;
    signUp(res: any, user: SignUpInterface): Promise<Tokens>;
    logout(res: any, userId: number): Promise<void>;
    profile(res: any, userId: number): Promise<void>;
    refreshTokens(res: any, rt: refreshTokensInterface): Promise<void>;
    updateRtHash(res: any, userId: number, rt: string): Promise<void>;
    hashData(data: string): Promise<string>;
    getTokens(payload: UserSignUpDto): Promise<Tokens>;
}
