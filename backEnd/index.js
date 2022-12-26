import mongoose from 'mongoose'
import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import router from './router/router.js';
const url = process.env.DB_CONNECT;
const app = express();
const port = 8080;
dotenv.config();
app.use(cors());
try {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Database Connected Successfully')
    })
} catch (error) {
    console.log(error)
}


app.use('/', router)
app.get('/', (req, response) => {
    response.send("HOME PAGE")
})
app.listen(port, () => {
    console.log("Server listening on port", port)
})



