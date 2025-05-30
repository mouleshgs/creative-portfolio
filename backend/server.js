import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import mongoose from "mongoose";


dotenv.config();


const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

.then(() => console.log(`the db is connected at ${port}`))
.catch((err) => console.log(`error : ${err}`));

