import { Global, Module } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule,
    JwtModule.register({
      secret: process.env['JWT_SECRET'],
    }),
  ],
  providers: [TokensService],
  exports: [TokensService],
})
export class TokensModule {}
