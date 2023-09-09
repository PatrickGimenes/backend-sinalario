import { Controller, Get, Param } from '@nestjs/common';
import { SignalsService } from './signals.service';

@Controller('signals')
export class SignalsController {
  constructor(private readonly signalsService: SignalsService) {}

  @Get()
  findAll() {
    return this.signalsService.findAll();
  }
  @Get()
  getCategories() {
    return this.signalsService.getCategories();
  }

  @Get(':id')
  findByCategory(@Param('id') id: string) {
    return this.signalsService.findByCategory(id);
  }
  @Get(':id')
  findBySlug(@Param('id') id: string) {
    return this.signalsService.findBySlug(id);
  }
}
