// server.js
import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import connectDB from "./db/db.js";  // <-- imported from db file
import authRoutes from "./routes/authRoutes.js";
import AddProjectRoutes from "./routes/AddProjectRoutes.js"
import ContactRoutes from "./routes/contactRoutes.js"
dotenv.config({ path: "../.env" }); // 👈 this line is very important
import {fileURLToPath} from "url"

const app = express();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve images

//Auth Routes
app.use("/api/auth", authRoutes);
// add Project Routers
app.use("/api/projects", AddProjectRoutes);
// contact Routes
app.use("/api/contact",ContactRoutes)


// Connect Database
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
