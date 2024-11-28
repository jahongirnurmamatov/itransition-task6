import React from "react";

const MyImages = () => {
  return (
    <div className="">
      <div className="w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-sm text-white mb-3">
        <label className="text-center cursor-pointer" htmlFor="image">
          Upload Image
        </label>
        <input type="file" className="hidden" id="image" />
      </div>
      <div className="h-[77vh] overflow-x-auto flex justify-start items-start">
        <div className="grid grid-cols-2 gap-2 ">
          {[1, 2, 3, 4, 5,12,4,5,5,3,2,4].map((img, idx) => (
            <div className="w-full h-[100px] overflow-hidden rounded-sm cursor-pointer">
              <img className="w-full h-full object-fill"
                src="https://media.slidesgo.com/storage/7288412/futuristic-background1622641945.jpg"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyImages;
