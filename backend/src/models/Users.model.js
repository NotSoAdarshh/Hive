import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {},
  {
    collection: "user",
    strict: false,
  }
);

export default mongoose.model("User", userSchema);