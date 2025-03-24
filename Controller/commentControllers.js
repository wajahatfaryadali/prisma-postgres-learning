import prisma from "../DB/db.config"

export const commentControllers = {
    // to get all comments
    getAllComments: async (req, res) => {
        try {

            const allComments = await prisma.comment.findMany({})

            return res.status(200).json({
                status: 200,
                allComments: allComments,
                message: "all comments"
            })

        } catch (error) {
            console.error("error while getting all comments **** ", error)
            return res.status(500).json({
                error: error.message,
                message: "Internal server error",
                status: 500
            })
        }
    },

    // to get create comment
    createComment: async (req, res) => {
        try {
            const { post_id, user_id, comment } = req.body;

            if (!post_id || !user_id || !comment) {
                return res.status(400).json({
                    message: "post_id, user_id and comment are required",
                    status: 400
                })
            }

            const isUserExist = await prisma.user.findUnique({
                where: {
                    id: Number(user_id)
                }
            })

            const isPostExist = await prisma.post.findUnique({
                where: {
                    id: Number(post_id)
                }
            })

            if (!isUserExist || !isPostExist) {
                return res.status(404).json({
                    message: "User or Post not found with the id",
                    error: 404
                })
            }

            const newComment = await prisma.comment.create({
                data: {
                    post_id,
                    user_id,
                    comment
                }
            })

            return res.status(200).json({
                status: 200,
                message: "new comment added",
                comment: newComment
            })

        } catch (error) {
            console.error("error while creating comment **** ", error)
            return res.status(500).json({
                error: error.message,
                message: "Internal server error",
                status: 500
            })
        }
    },

    // to get comment by id
    getCommentByID: async (req, res) => {
        try {

            const { comment_id } = req.params;

            const comment = await prisma.comment.findUnique({
                where: {
                    id: Number(comment_id)
                }
            })

            if (!comment) {
                return res.status(404).json({
                    status: 404,
                    message: "comment not found against this id"
                })
            }

            return res.status(200).json({
                status: 200,
                message: "comment against id",
                comment
            })


        } catch (error) {
            console.error("error while getting comment against id **** ", error)
            return res.status(500).json({
                error: error.message,
                message: "Internal server error",
                status: 500
            })
        }
    },

    // to update comments
    updateComment: async (req, res) => {
        try {
            const { comment_id, editedComment } = req.body;
            const comment = await prisma.comment.findUnique({
                where: {
                    id: Number(comment_id)
                }
            })

            if (!comment) {
                return res.status(404).json({
                    status: 404,
                    message: "comment not found against this id"
                })
            }

            const updatedComment = await prisma.comment.update({
                where: {
                    id: Number(comment_id)
                },
                data: {
                    comment: editedComment
                }
            })

            return res.status(200).json({
                status: 200,
                message: "comment updated",
                comment: updatedComment
            })


        } catch (error) {
            console.error("error while updating comment **** ", error)
            return res.status(500).json({
                error: error.message,
                message: "Internal server error",
                status: 500
            })
        }
    },

    // to delete all comments
    deleteComment: async (req, res) => {
        try {

            const { comment_id } = req.params;

            const comment = await prisma.comment.findUnique({
                where: {
                    id: Number(comment_id)
                }
            })

            if (!comment) {
                return res.status(404).json({
                    status: 404,
                    message: "comment not found against this id"
                })
            }

            const deletedComment = await prisma.comment.delete({
                where: {
                    id: Number(comment_id)
                }
            })

            return res.status(200).json({
                status: 200,
                message: "comment deleted successfully",
                comment: deletedComment
            })

        } catch (error) {
            console.error("error while getting all comments **** ", error)
            return res.status(500).json({
                error: error.message,
                message: "Internal server error",
                status: 500
            })
        }
    },
}
