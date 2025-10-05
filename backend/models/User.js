import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  userType: { type: String, enum: ["user", "host"], default: "user" }
});

export default mongoose.model("User", userSchema);
