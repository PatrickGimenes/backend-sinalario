import { Router, request, response } from "express";
import { signalFactory } from "./useCases/Signal/SignalFactory";

const router = Router();

router.get("/", (request, response) => {
  return response.status(200).send("olá");
});

router.get("/signals", (request, response) => {
  signalFactory().getAll(request, response);
});

router.get("/signals/:slug", (request, response) => {
  signalFactory().findBySlug(request, response);
});

router.get("/signals/category/:slug", (request, response) => {
    signalFactory().findByCategory(request, response);
  });

  router.get("/signals/categories", (request, response) => {
    signalFactory().getCategories(request, response);
  });
export { router };
