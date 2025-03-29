import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import itemRoutes from './routes/itemRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

const dbConnect = async() => {
    try {
         await mongoose.connect(process.env.MONGO_URI)
    console.log("conneted successfully")
    } catch (error) {
        console.log(error)
    }
}
dbConnect()

app.use('/api/blogs', itemRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
