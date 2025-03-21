import { configDotenv } from "dotenv";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

configDotenv();

app.get('/', (req, res) => {
    res.send('working')
})
app.listen(PORT, () => {
    console.log(`App is listning on PORT: ${PORT}`)
})

console.log('**** chekcing ***')