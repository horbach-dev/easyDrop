import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectsDetailsService {
  constructor(private prisma: PrismaService) {}

  async getProjectsDetails({
    page,
    take = 10,
  }: {
    page: number;
    take: number;
  }) {
    return {
      data: await this.prisma.projectDetails.findMany({
        skip: page * take,
        take,
      }),
      pages: Math.ceil((await this.prisma.projectDetails.count()) / take),
      currentPage: page,
    };
  }

  getProjectsDetailsById(projectDetailsId) {
    return this.prisma.projectDetails.findFirst({
      where: {
        id: projectDetailsId,
      },
    });
  }

  update(projectId: string, projectDetailsData: any) {
    return this.prisma.projectDetails.update({
      data: {
        ...projectDetailsData,
      },
      where: {
        id: projectId,
      },
    });
  }
}
