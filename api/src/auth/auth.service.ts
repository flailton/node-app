import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthRegisterDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async create(): Promise<string> {
    return this.jwtService.sign({});
  }

  async verify(token: string): Promise<any> {
    return this.jwtService.verifyAsync(token);
  }

  async decode(token: string): Promise<any> {
    return this.jwtService.decode(token);
  }

  async register(user: AuthRegisterDto) {
    return this.userService.create(user);
  }

  async login(email: string, password: string) {
    const user = this.userService.findByParam({
      email,
      password,
    });

    if (!user) {
      throw new UnauthorizedException('E-mail e/ou senha incorretos.');
    }

    return true;
  }

  async forget(email: string) {
    const user = this.userService.findByParam({
      email,
    });

    if (!user) {
      throw new UnauthorizedException('E-mail está incorreto.');
    }

    return true;
  }

  async reset(password: string, token: string) {
    // TODO: validar o token e obter as infromações...

    const id = 0;

    await this.userService.update(id, { password: password });

    return true;
  }
}
