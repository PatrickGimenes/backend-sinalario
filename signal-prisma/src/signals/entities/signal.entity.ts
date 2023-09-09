import { Category } from './category.entity';

export class Signal {
  id?: string;
  name: string;
  description: string;
  slug: string;
  categories: Category[];
}
