import { Controller, Get, Param } from '@nestjs/common';
import { SignalsService } from './signals.service';

@Controller()
export class SignalsController {
  constructor(private readonly signalsService: SignalsService) {}

  @Get()
  findAll() {
    return this.signalsService.findAll();
  }
  @Get('/categories')
  getCategories() {
    return this.signalsService.getCategories();
  }

  @Get('/category/:id')
  findByCategory(@Param('id') id: string) {
    return this.signalsService.findByCategory(id);
  }
  @Get('/slug/:id')
  findBySlug(@Param('id') id: string) {
    return this.signalsService.findBySlug(id);
  }
}
