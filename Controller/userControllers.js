import prisma from "../DB/db.config.js";

export const userControllers = {
    // to get all users
    getUsers: async (req, res) => {
        const allUsers = await prisma.user.findMany({
            select: {
                name: true,
                email: true,
                id: true,
                password: false
            }
        });
        const totalCount = await prisma.user.count({});

        return res.json({
            users: allUsers,
            totalUsers: totalCount
        })
    },

    // to get a single user
    getUserByID: async (req, res) => {
        const userID = req.params.id;
        const user = await prisma.user.findFirst({
            where: {
                id: Number(userID)
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: false
            }
        })

        if (user) {
            return res.json({
                status: 200,
                user: user,
            })
        }else{
            return res.json({
                status: 404,
                message: "duck! user not found",
            }) 
        }
    },

    // to create user
    createUser: async (req, res) => {
        const { name, email, password } = req.body;

        const alreadyEsit = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        console.log("chekcing alreadyEsti **** ", alreadyEsit)
        if (alreadyEsit) {
            return res.json({
                status: 400,
                message: "User already exist",
            })
        }

        const createdUser = await prisma.user.create({
            data: {
                email,
                name,
                password
            }
        })

        return res.json(
            {
                status: 200,
                message: "User created successfully!",
                data: createdUser
            }
        )
    },

    // to update user
    updateUser: async (req, res) => {
        const userID = req.params.id;
        const { name, email, password } = req.body;

        const updatedUser = await prisma.user.update({
            where: {
                id: Number(userID),
            },
            data: {
                name,
                email,
                password
            }
        })

        console.log('chckig ******* ', updatedUser)
        res.json({ status: 200, message: "user updated!", data: updatedUser })

    }
}