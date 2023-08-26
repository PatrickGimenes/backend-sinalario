import { SignalUseCase } from "./SignalUseCase";
import { Request, Response } from "express";

class SignalController {
  constructor(private signalUseCase: SignalUseCase) {}

  getAll(request: Request, response: Response) {
    const signals = this.signalUseCase.getAll();
    return response.status(200).json(signals);
  }
  getCategories(request: Request, response: Response) {
    const signals = this.signalUseCase.getCategories();
    return response.status(200).json(signals);
  }

  findBySlug(request: Request, response: Response) {
    const { slug } = request.params;
    const signal = this.signalUseCase.findBySlug(slug);
    return response.status(200).json(signal);
  }

  findByCategory(request: Request, response: Response) {
    const { slug } = request.params;

    const signals = this.signalUseCase.findByCategory(slug);
    return response.status(200).json(signals);
  }
}

export { SignalController };
