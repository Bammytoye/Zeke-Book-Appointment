import express from "express";
import { loginAdmin, verifyAdmin } from "../controllers/authController.js";
import protectAdmin from "../middleware/protectAdmin.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/verify", protectAdmin, verifyAdmin);

export default router;