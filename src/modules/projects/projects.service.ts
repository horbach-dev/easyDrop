import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, createProject: CreateProjectDto) {
    return this.prisma.project.create({
      data: {
        ...createProject,
        userId,
      },
    });
  }

  update(
    projectId: string,
    projectData: {
      name: string;
    },
  ) {
    return this.prisma.project.update({
      data: {
        ...projectData,
      },
      where: {
        id: projectId,
      },
    });
  }

  findProjectById(id: string) {
    return this.prisma.project.findFirst({
      where: { id },
    });
  }

  async getProjects(
    userId: string,
    {
      page,
      take = 10,
      details = false,
    }: { page: number; take: number; details: boolean },
  ) {
    if (details) {
      return {
        data: await this.prisma.project.findMany({
          where: {
            userId: userId,
          },
          include: {
            projectDetails: true,
          },
        }),
        pages: 0,
        currentPage: 0,
      };
    }

    return {
      data: await this.prisma.project.findMany({
        skip: page * take,
        take,
        where: {
          userId: userId,
        },
      }),
      pages: Math.ceil(
        (await this.prisma.project.count({
          where: {
            userId: userId,
          },
        })) / take,
      ),
      currentPage: page,
    };
  }
}
