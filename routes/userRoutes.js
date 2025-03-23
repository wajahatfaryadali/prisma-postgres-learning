import { Router } from "express";
import { userControllers } from "../Controller/userControllers.js";

const router = Router();

router.post('/', userControllers.createUser)
export default router;