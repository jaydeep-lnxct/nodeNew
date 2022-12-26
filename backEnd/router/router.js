
import express from "express";
import { addUserData } from "../controller/userControllers.js";
const router = express.Router();
router.post('/userdata', addUserData)

export default router;