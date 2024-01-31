import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUser: CreateUserDto) {
    return this.prisma.user.create({ data: createUser });
  }

  findAll(page: number = 0, count: number = 10) {
    return this.prisma.user.findMany({ take: 10, skip: count * page });
  }

  findById(id: string) {
    return this.prisma.user.findFirst({
      where: { id },
    });
  }

  findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  updateUser(userId: string, userData: UpdateUserDto) {
    return this.prisma.user.update({
      data: {
        ...userData,
      },
      where: {
        id: userId,
      },
      select: {
        id: true,
        username: true,
        name: true,
      },
    });
  }
  updateRefreshToken(username: string, token: string) {
    return this.prisma.user.update({
      where: { username },
      data: { refresh: token },
    });
  }

  async getUsers({
    page,
    take = 10,
    searchText = '',
    searchColumn = '',
  }: {
    page: number;
    take: number;
    searchText: string;
    searchColumn: string;
  }) {
    let data: any;
    let count: any;

    if (searchText) {
      data = await this.prisma.user.findMany({
        skip: page * take,
        take,
        where: {
          username: {
            contains: searchText,
          },
        },
      });

      count = await this.prisma.user.count({
        where: {
          username: {
            contains: searchText,
          },
        },
      });
    } else {
      data = await this.prisma.user.findMany({
        skip: page * take,
        take,
      });
      count = await this.prisma.user.count();
    }

    return {
      data,
      pages: Math.ceil(count / take),
      currentPage: page,
    };
  }
}
