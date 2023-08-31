import Image from "next/image";
import getBlogs from "./getBlogs";
import Slider from "./Slider";

const Featured = async () => {
  const blogs = await getBlogs();
  const loading = blogs === null || blogs === undefined;

  return (
    <div>
      <Slider blogs={blogs} />
    </div>
  );
};
export default Featured;
