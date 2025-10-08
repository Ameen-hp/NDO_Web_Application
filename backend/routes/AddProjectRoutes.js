import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Project from "../models/AddProject.js";

const router = express.Router();

// 🗂️ Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Store images in uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ✅ Create a new project
router.post("/", upload.array("images", 10), async (req, res) => {
  try {
    const { title, category, description } = req.body;

    const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);

    const newProject = new Project({
      title,
      category,
      description,
      images: imagePaths,
    });

    await newProject.save();
    res.status(201).json({ message: "Project created successfully", newProject });
  } catch (error) {
    res.status(500).json({ message: "Error creating project", error: error.message });
  }
});

// ✅ Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error: error.message });
  }
});

// ✅ Delete a project
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    // Delete associated images from server
    project.images.forEach((imgPath) => {
      const filePath = path.join(process.cwd(), imgPath);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });

    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project", error: error.message });
  }
});

// ✅ Update a project
router.put("/:id", upload.array("images", 10), async (req, res) => {
  try {
    const { title, category, description } = req.body;

    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    // If new images uploaded → delete old ones
    let updatedImages = project.images;
    if (req.files.length > 0) {
      // Delete old images
      project.images.forEach((imgPath) => {
        const filePath = path.join(process.cwd(), imgPath);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      });

      // Add new images
      updatedImages = req.files.map((file) => `/uploads/${file.filename}`);
    }

    // Update fields
    project.title = title;
    project.category = category;
    project.description = description;
    project.images = updatedImages;

    await project.save();

    res.status(200).json({ message: "Project updated successfully", project });
  } catch (error) {
    res.status(500).json({ message: "Error updating project", error: error.message });
  }
});

export default router;
