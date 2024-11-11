import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRouter from './routes/tours.js'
import userRouter from './routes/users.js'
import authRouter from './routes/auth.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

//database connection
mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected');
    }
    catch (err) {
        console.log('DB connection failed', err);
    }
}

//for testing
app.get('/', (req, res) => {
    res.send('api is working!');
})

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());


//use route
app.use('/tours', tourRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
    connect();
    console.log(`Server is running on port ${port}`);
 })