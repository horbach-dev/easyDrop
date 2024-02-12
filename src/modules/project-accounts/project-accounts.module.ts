import { Module } from '@nestjs/common';
import { ProjectAccountsService } from './project-accounts.service';
import { ProjectAccountsController } from './project-accounts.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProjectAccountsController],
  providers: [ProjectAccountsService],
})
export class ProjectAccountsModule {}
