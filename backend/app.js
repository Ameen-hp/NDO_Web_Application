// server.js
import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import connectDB from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import AddProjectRoutes from "./routes/AddProjectRoutes.js";
import ContactRoutes from "./routes/contactRoutes.js";

dotenv.config({ path: ".env" });

const app = express();

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Allowed Frontend Origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://naridevelopment.org",
  "https://www.naridevelopment.org",
];

// ✅ Configure CORS Properly
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", AddProjectRoutes);
app.use("/api/contact", ContactRoutes);

// ✅ Connect Database
connectDB();

// ✅ Default Route (Optional - for testing)
app.get("/", (req, res) => {
  res.send("🌞 SolarHub API is running successfully!");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
