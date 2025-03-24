import { Router } from "express";
import { commentControllers } from "../Controller/commentControllers.js";


const router = Router();

router.get("/", commentControllers.getAllComments)
router.get("/:comment_id", commentControllers.getCommentByID)
router.post("/", commentControllers.createComment)
router.put("/", commentControllers.updateComment)
router.delete("/:comment_id/:post_id", commentControllers.deleteComment)

export default router;
