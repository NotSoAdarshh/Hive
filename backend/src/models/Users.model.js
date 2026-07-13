import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {},
  {
    collection: "user", // This is the important part
    strict: false,
  }
);

export default mongoose.model("User", userSchema);