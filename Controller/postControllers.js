import prisma from "../DB/db.config"

export const postControllers = {
    // to create posts
    createPost: async (req, res) => {
        try {
            const { user_id, title, description } = req.body;

            if (!user_id || !title || !description) {
                return res.status().json({
                    status: 400,
                    message: "user_id, title, and description all fields are required!"
                })
            }

            const post = await prisma.post.create({
                data: {
                    user_id,
                    title,
                    description
                }
            })

            return res.status(201).json({
                message: "Post created successfully!",
                status: 201,
                post: post,
            })

        } catch (error) {
            console.error('error while creating post **** ', error)
            return res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message })
        }
    },

    // to get all post
    getAllPosts: async (req, res) => {
        try {
            const allPosts = await prisma.post.findMany({});

            return res.status(200).json({
                status: 200,
                message: "Fetched all posts successfully!",
                posts: allPosts
            })

        } catch (error) {
            console.error('error while getting all posts **** ', error);
            return res.status(500).json({ status: 500, message: "Internal server error", error: error.message })
        }

    },

    // to get post by id
    getPostByID: async (req, res) => {

        try {
            const { id } = req.params;

            const post = await prisma.post.findUnique({
                where: {
                    id: Number(id)
                }
            })

            if (post) {
                return res.status(200).json({
                    status: 200,
                    post: post,
                    message: "post against id"
                })
            } else {
                return res.status(404).json({
                    status: 404,
                    message: "duck! post not found!"
                })
            }

        } catch (error) {
            console.error("error while getting post by id **** ", error);
            return res.status(500).json({
                message: "Internal server error",
                status: 500,
                error: error.message
            })
        }
    },

    // to update post
    updatePost: async (req, res) => {

        try {
            const postID = req.params.id;
            // const { user_id, title, description } = req.body;
            // or we can do ...req.body

            const isPostExist = await prisma.post.findUnique({
                where: {
                    id: Number(postID)
                }
            })

            if (!isPostExist) {
                return res.status(404).json({
                    status: 404,
                    message: "Post not found against this id!"
                })
            }

            const updatedPost = await prisma.post.update({
                where: {
                    id: Number(postID),
                },
                data: {
                    // user_id,
                    // title,
                    // description
                    ...req.body
                }
            })

            return res.status(200).json({
                post: updatedPost,
                status: 200,
                message: "post updated"
            })

        } catch (error) {
            console.error('error while updating post **** ', error);
            return res.status(500).json({
                status: 500,
                message: "Internal server error",
                error: error.message
            })

        }

    },

    // to delete post 
    deletePost: async (req, res) => {
        try {
            const postID = req.params.id;

            // no need of below code because prisma throw error if post not found 

            // const isPostExist = await prisma.post.findUnique({
            //     where: {
            //         id: Number(postID)
            //     }
            // })

            // if (!isPostExist) {
            //     return res.status(404).json({
            //         status: 404,
            //         message: "Post not found",
            //     })
            // }

            await prisma.post.delete({
                where: {
                    id: Number(postID)
                }
            })
            return res.status(200).json({
                message: "Post deleted successfully!",
                status: 200,
            })

        } catch (error) {
            console.error("error while deleting post **** ", error)
            return res.status(500).json({
                status: 500,
                message: "Internal server error",
                error: error.message
            })
        }

    },

    getPostsByUserID: async (req, res) => {
        try {
            const userID = req.params.user_id;

            // Check if the user exists
            const userExists = await prisma.user.findUnique({
                where: { id: userID }
            });

            if (!userExists) {
                return res.status(404).json({
                    status: 404,
                    message: "User not found!",
                });
            }

            const allPosts = await prisma.post.findMany({
                where: {
                    user_id: Number(userID)
                }
            })

            return res.status(200).json({
                message: "all posts for single user",
                status: 200,
                posts: allPosts
            })

        } catch (error) {
            console.error("error while getting user's post **** ", error);
            return res.status(500).json({
                status: 500,
                message: "Internal server error",
                error: error.message
            })

        }
    }
}