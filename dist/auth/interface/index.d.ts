export declare class LoginInterFace {
    email: string;
    password: string;
}
export declare class SignUpInterface {
    email: string;
    password: string;
    name: string;
    phone: string;
    birth_day: Date | string;
    gender: boolean | string;
    role: string;
    skill: string;
    certification: string;
    hash?: string;
}
export declare class refreshTokensInterface {
    userId: number;
    refreshToken: string;
}
