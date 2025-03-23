import { Router } from "express";
import { postControllers } from "../Controller/postControllers.js";
const router = new Router();

router.get('/', postControllers.getAllPosts)
router.get('/:id', postControllers.getPostByID)
router.post('/', postControllers.createPost)
router.put('/:id', postControllers.updatePost)
router.delete('/:id', postControllers.deletePost)
router.delete('/user/:user_id', postControllers.deletePost)

export default router;
