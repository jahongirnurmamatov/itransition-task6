import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { FaTrash } from "react-icons/fa";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const HomePage = () => {
  return (
    <div className="">
      <div className="w-full flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] overflow-hidden relative rounded-md">
        <h1 className=" text-3xl pb-10 pt-6 font-semibold text-white">
          Start Creating Slides
        </h1>
      </div>
      <h2 className="text-xl py-6 text-white font-semibold">
        Your recent designs
      </h2>
      <div className="max-w-[1340px] mx-auto px-4 flex items-center justify-center">
        <div className="carousel carousel-center bg-neutral   rounded-box max-w-xl space-x-4 p-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <div className="carousel-item relative group">
              <Link>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </Link>
              <div className="absolute cursor-pointer top-2 right-2 text-red-500 p-2 transition-all duration-500 hover:scale-110 group-hover:block hidden ">
                <FaTrash />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
