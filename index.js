import { configDotenv } from "dotenv";
import express, { Router } from "express";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js"
import commentRoutes from "./routes/commentRoutes.js"

configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)

app.get('/', (req, res) => {
    res.send('working')
})
app.listen(PORT, () => {
    console.log(`App is listning on PORT: ${PORT}`)
})

console.log('**** chekcing ***')