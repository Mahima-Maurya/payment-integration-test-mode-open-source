import express from "express";
import { checkout } from "../controllers/DonationControllers.js";
const router = express.Router();

router.route ("/checkout").post(checkout);

export default router;