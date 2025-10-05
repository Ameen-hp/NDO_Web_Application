// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db.js";  // <-- imported from db file
import authRoutes from "./routes/authRoutes.js";
dotenv.config({ path: "../.env" }); // 👈 this line is very important


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Connect Database
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
