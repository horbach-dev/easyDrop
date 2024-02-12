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
import { ProjectsService } from './projects.service';
import { accessTokenGuard } from '../../guards/accessToken.guard';

@Controller('api')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @UseGuards(accessTokenGuard)
  @Post('project/:userId')
  create(@Body() project: any, @Param('userId') userId) {
    return this.projectsService.create(userId, project);
  }

  @UseGuards(accessTokenGuard)
  @Put('project/:projectId')
  update(@Req() req, @Param('projectId') projectId: string) {
    const data = req.body;
    delete data.id;
    return this.projectsService.update(projectId, data);
  }

  @UseGuards(accessTokenGuard)
  @Get('project/:projectId')
  getProject(@Param('projectId') projectId: string) {
    return this.projectsService.findProjectById(projectId);
  }

  @UseGuards(accessTokenGuard)
  @Get('projects/:userId')
  getProjects(
    @Query('page') page = 0,
    @Query('take') take = 10,
    @Query('details') details = false,
    @Param('userId') userId,
  ) {
    return this.projectsService.getProjects(userId, {
      page,
      take: +take,
      details,
    });
  }
}
