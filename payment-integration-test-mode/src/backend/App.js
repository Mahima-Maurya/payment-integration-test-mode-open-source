import express from "express";
import {config} from "dotenv";
import DonationRouter from "./routes/DonationRoutes.js";
const app=express();

config({path:"./config/config.env"});
app.use(express.json());
app.use("/api",DonationRouter);
export default app;
