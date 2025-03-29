import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use(
  express.urlencoded({
    extended: false,
  })
);
const corsOptions = {
  origin: ["http://localhost:3000", "https://code-crafters-5afw.vercel.app"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("conneted successfully");
  } catch (error) {
    console.log(error);
  }
};
dbConnect();

app.use("/api/blogs", itemRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
