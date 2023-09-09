import { Module } from '@nestjs/common';
import { SignalsService } from './signals.service';
import { SignalsController } from './signals.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SignalsController],
  providers: [SignalsService, PrismaService],
})
export class SignalsModule {}
