import { Router } from "express";
import { postControllers } from "../Controller/postControllers.js";
const router = new Router();

router.get('/', postControllers.getAllPosts)
router.get('/:id', postControllers.getPostByID)
router.post('/', postControllers.createPost)
router.put('/:id', postControllers.updatePost)
router.delete('/:id', postControllers.deletePost)
router.get('/user/:user_id', postControllers.getPostsByUserID)

export default router;
