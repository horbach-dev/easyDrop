import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectAccountsService {
  constructor(private prisma: PrismaService) {}

  create(accountData: any) {
    return this.prisma.account.create({
      data: {
        ...accountData,
      },
    });
  }

  update(accountId: string, accountData: any) {
    return this.prisma.account.update({
      data: {
        ...accountData,
      },
      where: {
        id: accountId,
      },
    });
  }

  findAccountById(id: string) {
    return this.prisma.account.findFirst({
      where: { id },
    });
  }

  async getAccounts(
    projectId: string,
    { page, take = 10 }: { page: number; take: number },
  ) {
    return {
      data: await this.prisma.account.findMany({
        skip: page * take,
        take,
        where: {
          projectId: projectId,
        },
        include: {
          Project: {
            select: {
              name: true,
            },
          },
        },
      }),
      pages: Math.ceil(
        (await this.prisma.account.count({
          where: {
            projectId: projectId,
          },
        })) / take,
      ),
      currentPage: page,
    };
  }

  getUserAccounts(userId: string) {
    return this.prisma.project.findMany({
      where: {
        userId,
      },
      include: {
        Accounts: true,
      },
    });
    // return this.prisma.account.findMany({
    //   where: {
    //     Project: {
    //       userId,
    //     },
    //   },
    //   include: {
    //     Project: {
    //       select: {
    //         name: true,
    //       },
    //     },
    //   },
    // });
  }
}
