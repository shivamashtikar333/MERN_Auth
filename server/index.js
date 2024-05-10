import express from 'express';
import connectDB from './config/dbConfig.js';
import signupRoute from './routes/signupRoute.js';
import loginRoute from './routes/loginRoute.js';
import userRoute from './routes/userRoute.js';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import cors from 'cors';
import createAdminAccount from './scripts/admin.js';


dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(bodyParser.json());


app.use('/user/register',signupRoute);
app.use('/auth',loginRoute);
app.use('/api/users',userRoute);


const startServer = async () => {
    try {
        createAdminAccount()
        connectDB(process.env.MONGODB_URL)

        app.listen(PORT, ()=>{
            console.log(`Server is running on Port: ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();