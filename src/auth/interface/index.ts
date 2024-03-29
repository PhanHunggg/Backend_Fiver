import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator";


export class LoginInterFace {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: "email", type: String })
    email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: "password", type: String })
    password: string;
}

export class SignUpInterface {
    @ApiProperty({ description: "email", type: String })
    email: string;

    @ApiProperty({ description: "password", type: String })
    password: string;

    @ApiProperty({ description: "name", type: String })
    name: string;

    @ApiProperty({ description: "phone", type: String })
    phone: string;

    @ApiProperty({ description: "birth_day", type: Date })
    birth_day: Date | string;

    @ApiProperty({ description: "gender", type: Boolean })
    gender: boolean | string;

    role: string;

    @ApiProperty({ description: "skill", type: String })
    skill: string;

    @ApiProperty({ description: "certification", type: String })
    certification: string;

    hash?: string;

}

export class refreshTokensInterface {
    userId: number;
    refreshToken: string;
}