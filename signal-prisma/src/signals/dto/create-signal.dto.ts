import { Category } from '../entities/category.entity';
export class CreateSignalDto {
  id?: string;
  name: string;
  description: string;
  slug: string;
  categories: Category[];
}
