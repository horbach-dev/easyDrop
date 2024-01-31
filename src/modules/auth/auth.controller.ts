import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { accessTokenGuard } from '../../guards/accessToken.guard';
import { refreshTokenGuard } from '../../guards/refreshToken.guard';
import { UsersService } from '../users/users.service';
import { Response } from 'express';
import * as moment from 'moment/moment';

@Controller('api/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @UseGuards(accessTokenGuard)
  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('signin')
  async signin(
    @Body() data: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = await this.authService.signIn(data);
    res.cookie('token', user.accessToken, {
      expires: moment().add(1, 'month').toDate(),
    });
    return user;
  }

  @UseGuards(refreshTokenGuard)
  @Get('refresh')
  refresh(@Req() req) {
    return this.authService.refreshTokens(req.user);
  }

  @UseGuards(accessTokenGuard)
  @Get('profile')
  profile(@Req() req) {
    return this.usersService.findById(req.user.id);
  }

  // @UseGuards(TokenGuard)
  // @Get('logout')
  // logout(@Req() req: Request) {
  //   this.authService.logout(req.user['sub']);
  // }
}
