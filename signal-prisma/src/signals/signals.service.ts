import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SignalsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.signal.findMany();
  }

  async getCategories() {
    return await this.prisma.category.findMany();
  }
  async findByCategory(slug: string) {
    return await this.prisma.signal.findUnique({
      where: {
        slug,
      },
    });
  }
  async findBySlug(slug: string) {
    return await this.prisma.signal.findUnique({
      where: {
        slug,
      },
    });
  }
}
