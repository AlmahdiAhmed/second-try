import { Suspense } from "react";
import Blogs from "./Blogs";

const BlogWrapper = () => {
  return (
    <>
      <Suspense fallback={<h1>loading blogs</h1>}>
        <Blogs />
      </Suspense>
    </>
  );
};
export default BlogWrapper;
