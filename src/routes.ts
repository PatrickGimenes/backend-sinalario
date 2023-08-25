import { Router, request, response } from "express";

const router = Router()

router.get('/signals', (request, response) => {
    return response.status(200).send();
})

export { router }
