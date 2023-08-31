"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
const Slider = ({ blogs }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const featured = blogs.filter((blog) => blog.featured === "true");
  return (
    <div className="mt-3 ">
      <div className="p-1 my-1 text-2xl font-extrabold underline decoration-[#F05D5E] text-[#0f7173]">
        <h2>Top Exercises</h2>
      </div>
      {!featured ? (
        <h1>Just a moment</h1>
      ) : (
        <Carousel responsive={responsive} className="z-0">
          {featured.map((blog) => {
            const { _id, title, img, content } = blog;
            return (
              <Link href={`/${blog._id}`} key={blog._id}>
                <div className="relative w-[95%] h-[150px] border-2 rounded-xl border-[#D8A47F]">
                  <div className="relative w-full h-full">
                    <Image
                      src={img}
                      width={200}
                      height={200}
                      alt="image"
                      className="rounded-xl object-cover object-center h-auto w-auto"
                    />
                  </div>
                  <div className="absolute p-1 rounded-sm bottom-2 left-2 text-[#F05D5E]">
                    <h2 className="font-extrabold capitalize">{blog.title}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};
export default Slider;
