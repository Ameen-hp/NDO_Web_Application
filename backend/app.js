// server.js
import express from "express";
import dotenv from "dotenv";
import { verifyToken } from "./middlware/AuthMidlware2.js"
import path from "path";
import cors from "cors";
import connectDB from "./db/db.js";  // <-- imported from db file
import authRoutes from "./routes/authRoutes.js";
import AddProjectRoutes from "./routes/AddProjectRoutes.js"
import ContactRoutes from "./routes/contactRoutes.js"
dotenv.config({ path: ".env" }); // 👈 this line is very important
import {fileURLToPath} from "url"

const app = express();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const allowedOrigins = [
  "http://localhost:5173",       // for local development
  "http://129.154.242.48:5173",  // for hosted frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve images

// AuthRoute with no token if 
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
