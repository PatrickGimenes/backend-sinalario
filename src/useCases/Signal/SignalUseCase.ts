import { ISignalsRepository } from "../../repositories/ISignalsRepository";

export class SignalUseCase {
  constructor(private signalRepositoty: ISignalsRepository) {}

  getAll() {
    return this.signalRepositoty.getAll();
  }
  getCategories() {
    return this.signalRepositoty.getCategories();
  }
  findBySlug(slug: string) {
    return this.signalRepositoty.findBySlug(slug);
  }
  findByCategory(slug: string) {
    return this.signalRepositoty.findByCategory(slug);
  }
}

