import { SignalsRepositoryInMemory } from "../../repositories/in-memory/SignalsRepositoryInMemory";
import { SignalUseCase } from './SignalUseCase';
import { SignalController } from "./SignalController";



export const signalFactory = () => {
    const signalRepository = new SignalsRepositoryInMemory();
    const signalUseCase = new SignalUseCase(signalRepository);
    const signalController = new SignalController(signalUseCase);
    return signalController;
  };