import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import authMiddleware from "../middlware/authMiddlware.js";

const router = express.Router();

// --- Signup ---
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, userType } = req.body;

    // ✅ Check if user already exists
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "User already exists" });

    // ✅ Restrict number of hosts to 2
    if (userType === "host") {
      const hostCount = await User.countDocuments({ userType: "host" });
      if (hostCount >= 2) {
        return res.status(403).json({
          message: "you cant create account as a host",
        });
      }
    }

    // ✅ Hash password and create user
    const hashed = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashed, userType });

    res.json({ success: true, message: "Signup successful!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- Login ---
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, userType: user.userType },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token,
      user: { name: user.name, email: user.email, userType: user.userType },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- Protected route example ---
router.get("/me", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

export default router;
