import { Category } from "../entities/category";
import { Signal } from "../entities/signal";

export interface ISignalsRepository {
  //findByName(name: String): Promise<Signal>;
  getAll(): Promise<Signal[]>;
  getCategories(): Promise<Category[]>;
  findBySlug(slug: string): Promise<Signal[] | undefined>;
  findByCategory(slug: string): Promise<Signal[] | undefined>;
  
}
