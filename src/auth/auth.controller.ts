import { AuthService } from './auth.servise';
import { Controller,Post } from "@nestjs/common";

@Controller('auth')
export class AuthController{
constructor(private authService: AuthService){

}

@Post('signup')
signup(){
    return this.authService.signUp()
}
@Post('signin')
signin(){
    return this.authService.signIn()
}
} 
