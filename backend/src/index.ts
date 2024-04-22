import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

import userRoutes from "./routes/users";

mongoose.connect(process.env.MONGODB_CONNECTION as string);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", userRoutes);

app.listen(3303, () => {
    console.log("SERVER HAS LAUNCH ON PORT 3303");
});
