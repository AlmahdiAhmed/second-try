import connect from "@/libs/db";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();
  const blogs = await Blog.find();
  return NextResponse.json(blogs);
}
