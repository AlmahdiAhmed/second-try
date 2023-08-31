import mongoose from "mongoose";
import { Schema } from "mongoose";
const blog = new Schema(
  {
    title: String,
    content: String,
    category: String,
    featured: String,
    img: String,
  },
  { timestamps: true }
);
const Blog = mongoose.models.Blog || mongoose.model("Blog", blog);
export default Blog;
