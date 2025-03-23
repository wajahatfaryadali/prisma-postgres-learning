import { Router } from "express";
import { userControllers } from "../Controller/userControllers.js";

const router = Router();

router.get('/', userControllers.getUsers)
router.post('/', userControllers.createUser)
router.put('/:id', userControllers.updateUser)
export default router;