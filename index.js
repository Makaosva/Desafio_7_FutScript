import "dotenv/config";
import express from "express";
import router from "./routes/userRoute.js";

const app = express();

app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 3000;

app.listen(3000, console.log("SERVER ON"));
app.use(express.json());
