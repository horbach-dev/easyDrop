import {
  Controller,
  Get,
  Param,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ProjectsDetailsService } from './projects-details.service';
import { accessTokenGuard } from '../../guards/accessToken.guard';

@Controller('api')
export class ProjectsDetailsController {
  constructor(private projectsDetailsService: ProjectsDetailsService) {}

  @UseGuards(accessTokenGuard)
  @Get('projects-details')
  getProjectDetails(@Query('page') page = 0, @Query('take') take = 10) {
    return this.projectsDetailsService.getProjectsDetails({ page, take });
  }

  @UseGuards(accessTokenGuard)
  @Get('project-details/:id')
  getProjectDetailsById(@Param('id') projectDetailsId: string) {
    return this.projectsDetailsService.getProjectsDetailsById(projectDetailsId);
  }

  @UseGuards(accessTokenGuard)
  @Put('project-details/:id')
  update(@Req() req, @Param('id') projectId: string) {
    const data = req.body;
    delete data.id;
    delete data.label;
    return this.projectsDetailsService.update(projectId, data);
  }
}
