import { useImageStore } from "@/store/useImageStore";
import React from "react";
const Images = ({  }) => {
  const { addImage } = useImageStore();

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-2 ">
        {[1, 2, 3, 4, 5, 12, 4, 5, 5, 3, 2, 4].map((img, idx) => (
          <div
            key={idx}
            onClick={() => {
              setImage(
                "https://media.slidesgo.com/storage/7288412/futuristic-background1622641945.jpg"
              );
            }}
            className="w-full h-[100px] overflow-hidden rounded-sm cursor-pointer"
          >
            <img
              className="w-full h-full object-fill"
              src="https://media.slidesgo.com/storage/7288412/futuristic-background1622641945.jpg"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
