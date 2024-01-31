import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '@prisma/client';
import { TokensService } from '../tokens/tokens.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly tokenService: TokensService,
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    const userExists = await this.usersService.findByUsername(
      createUserDto.username,
    );
    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const user = await this.usersService.create({
      ...createUserDto,
      password: createUserDto.password,
    });
    const tokens = await this.tokenService.getTokens(user.id, user.username);

    await this.usersService.updateRefreshToken(
      user.username,
      tokens.refreshToken,
    );

    return {
      user,
      ...tokens,
    };
  }

  async signIn(data: AuthDto) {
    const user = await this.usersService.findByUsername(data.username);
    if (!user) throw new BadRequestException('User does not exist');

    if (data.password !== user.password)
      throw new BadRequestException('Password is incorrect');
    const tokens = await this.tokenService.getTokens(user.id, user.username);

    await this.usersService.updateRefreshToken(
      user.username,
      tokens.refreshToken,
    );

    return {
      user,
      ...tokens,
    };
  }

  async refreshTokens(user: User) {
    const tokens = await this.tokenService.getTokens(user.id, user.username);
    await this.usersService.updateRefreshToken(
      user.username,
      tokens.refreshToken,
    );

    return {
      ...tokens,
    };
  }
}
