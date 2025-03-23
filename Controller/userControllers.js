import prisma from "../DB/db.config.js";

export const userControllers = {
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

        console.log('checking data ****** ', req.body)
        return res.send('Create user route working in controller');
    }
}