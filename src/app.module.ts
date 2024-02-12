import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { ProjectsDetailsModule } from './modules/projects-details/projects-details.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProjectAccountsModule } from './modules/project-accounts/project-accounts.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    AuthModule,
    UsersModule,
    ProjectsModule,
    ProjectsDetailsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'dist'),
    }),
    ProjectAccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
