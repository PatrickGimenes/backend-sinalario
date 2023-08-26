import { Category } from "../../entities/category";
import { Signal } from "../../entities/signal";
import { ISignalsRepository } from "../ISignalsRepository";
import memdb from "memdb-json";

const MemDB = new memdb("./src/repositories/in-memory/data.json");

class SignalsRepositoryInMemory implements ISignalsRepository {
  getAll(): Promise<Signal[]> {
    return MemDB.select();
  }
  getCategories(): Promise<Category[]> {
    return MemDB.select({where: {categoryslug:""}});
  }
  findBySlug(slug: string): Promise<Signal[]> {
    return MemDB.select({where: {slug: slug}});
  }
  findByCategory(slug: string): Promise<Signal[]> {
    return MemDB.select({where: {categoryslug: slug}});
  }
}

export { SignalsRepositoryInMemory };
