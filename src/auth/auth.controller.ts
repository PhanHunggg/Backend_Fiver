import { Body, Controller, Post, Response } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service';
import { LoginInterFace, SignUpInterface } from './interface';
import { failCode } from 'src/config/response';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post("/login")
    login(@Response() res: any, @Body() body: LoginInterFace) {
        try {
            return this.authService.login(res, body)
        } catch (error) {
            failCode(res, error.message)
        }
    }

    @Post("/sign-up")
    signUp(@Response() res: any, @Body() body: SignUpInterface) {
        try {
            return this.authService.signUp(res, body)
        } catch (error) {
            failCode(res, error.message)
        }
    }

}
