import { Module } from '@nestjs/common';
import { ProjectsDetailsService } from './projects-details.service';
import { ProjectsDetailsController } from './projects-details.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProjectsDetailsService],
  controllers: [ProjectsDetailsController],
  exports: [ProjectsDetailsService],
})
export class ProjectsDetailsModule {}
