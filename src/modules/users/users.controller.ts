import {
  Body,
  Controller,
  Get, Param,
  Post,
  Put, Query,
  Req,
  UseGuards,
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { accessTokenGuard } from '../../guards/accessToken.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @UseGuards(accessTokenGuard)
  // @Get()
  // getAll(@Req() req: Request) {
  //   console.log(req.query)
  //   return this.usersService.findAll()
  // }

  @UseGuards(accessTokenGuard)
  @Post('user')
  create(@Body() createUser: CreateUserDto) {
    return this.usersService.create(createUser);
  }

  @UseGuards(accessTokenGuard)
  @Put('user/:id')
  update(@Req() req, @Param('id') id) {
    const data = req.body;
    delete data.id;
    return this.usersService.updateUser(id, data);
  }

  @UseGuards(accessTokenGuard)
  @Get('user')
  getUser(@Req() req) {
    return this.usersService.findById(req.user.id);
  }

  @UseGuards(accessTokenGuard)
  @Get('user/:id')
  getUserById(@Req() req, @Param('id') id) {
    return this.usersService.findById(id);
  }

  @UseGuards(accessTokenGuard)
  @Get('users')
  getUsers(
    @Query('page') page = 0,
    @Query('take') take = 10,
    @Query('searchText') searchText = '',
    @Query('searchColumn') searchColumn = '',
  ) {
    return this.usersService.getUsers({ page, take: +take, searchText, searchColumn });
  }
}
