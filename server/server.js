import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./utils/dbConnect.js";
import dataRoute from "./route/data.route.js";
const app = express();

dotenv.config();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use("/api/data", dataRoute);

const PORT = process.env.PORT || 5000;

dbConnect();

app.use(express.json());
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
