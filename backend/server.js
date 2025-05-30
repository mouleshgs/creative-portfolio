import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import mongoose from "mongoose";
import Contact from "./models/Contact.js";

dotenv.config();


const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log(`the db is connected at ${port}`))
.catch((err) => console.log(`error : ${err}`));



app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).send("Message stored successfully!");
  } catch (error) {
    res.status(500).send("Error storing message.");
  }
});

const __filename  = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, "..")));

app.get(/^\/(?!contact).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../contact.html"));
});


app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
console.log(__dirname);

});