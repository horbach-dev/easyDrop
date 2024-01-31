import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokensService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async getTokens(userId: string, username: string) {
    const accessToken = await this.jwtService.signAsync(
      {
        sub: userId,
        username,
      },
      {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
        expiresIn: this.configService.get<string>('JWT_ACCESS_EXPIRE'),
      },
    );

    const refreshToken = await this.jwtService.signAsync(
      {
        sub: userId,
        username,
      },
      {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
        expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRE'),
      },
    );

    return {
      accessToken,
      refreshToken,
    };
  }
}
