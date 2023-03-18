import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import {
  AuthResetDto,
  AuthForgetDto,
  AuthLoginDto,
  AuthRegisterDto,
} from './dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() { email, password }: AuthLoginDto) {
    return this.authService.login(email, password);
  }

  @Post('register')
  register(@Body() user: AuthRegisterDto) {
    return this.authService.register(user);
  }

  @Post('forget')
  forget(@Body() { email }: AuthForgetDto) {
    return this.authService.forget(email);
  }

  @Post('reset')
  reset(@Body() { password, token }: AuthResetDto) {
    return this.authService.reset(password, token);
  }
}
