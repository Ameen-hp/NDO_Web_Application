import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  date: { type: Date, default: Date.now },
  images: [{ type: String }], // <-- multiple image paths
});

export default mongoose.model("Project", projectSchema);
