import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { accessTokenGuard } from '../../guards/accessToken.guard';
import { ProjectAccountsService } from './project-accounts.service';

@Controller('api')
export class ProjectAccountsController {
  constructor(private projectAccountsService: ProjectAccountsService) {}

  @UseGuards(accessTokenGuard)
  @Post('account')
  create(@Body() account: any) {
    return this.projectAccountsService.create(account);
  }

  @UseGuards(accessTokenGuard)
  @Put('account/:accountId')
  update(@Req() req, @Param('accountId') projectId: string) {
    const data = req.body;
    delete data.id;
    return this.projectAccountsService.update(projectId, data);
  }

  @UseGuards(accessTokenGuard)
  @Get('account/:accountId')
  getAccount(@Param('accountId') accountId: string) {
    return this.projectAccountsService.findAccountById(accountId);
  }

  @UseGuards(accessTokenGuard)
  @Get('accounts/:projectId')
  getAccounts(
    @Query('page') page = 0,
    @Query('take') take = 10,
    @Param('projectId') projectId,
  ) {
    return this.projectAccountsService.getAccounts(projectId, {
      page,
      take: +take,
    });
  }

  @UseGuards(accessTokenGuard)
  @Get('accounts')
  getUserAccounts(@Req() req) {
    const userId = req.user.id;
    return this.projectAccountsService.getUserAccounts(userId);
  }
}
