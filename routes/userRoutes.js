import { Router } from "express";
import { userControllers } from "../Controller/userControllers.js";

const router = Router();

router.get('/', userControllers.getUsers)
router.get('/:id', userControllers.getUserByID)
router.post('/', userControllers.createUser)
router.put('/:id', userControllers.updateUser)
router.delete('/:id', userControllers.deleteUser)
export default router;