import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'eh0W*nB654hzFY4JO26E1O3qPp5%QW$6',
    }),
    UserModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
