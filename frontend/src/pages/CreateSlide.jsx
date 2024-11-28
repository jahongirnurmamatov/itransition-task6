import Header from "@/components/Header";
import React from "react";
import { CiGrid42 } from "react-icons/ci";
import { FaImages, FaShapes, FaFolderOpen } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { TfiText } from "react-icons/tfi";
import { TbBackground } from "react-icons/tb";
const CreateSlide = () => {
  return (
    <div className="min-w-screen h-screen bg-black">
      <Header />
      <div className="flex h-[calc(100%-60px)] w-screen">
        <div className="w-[80px] bg-[#181918] z-50 h-full text-gray-400 overflow-y-auto">
          <div
            className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
          >
            <span className="text-2xl">
              <CiGrid42 />
            </span>
            <span className="text-xs font-medium">Design</span>
          </div>
          <div
            className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
          >
            <span className="text-2xl">
              <FaShapes />
            </span>
            <span className="text-xs font-medium">Shapes</span>
          </div>
          <div
            className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
          >
            <span className="text-2xl">
              <IoMdCloudUpload />
            </span>
            <span className="text-xs font-medium">Upload</span>
          </div>
          <div
            className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
          >
            <span className="text-2xl">
              <TfiText />
            </span>
            <span className="text-xs font-medium">Text</span>
          </div>
          <div
            className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
          >
            <span className="text-2xl">
              <FaImages />
            </span>
            <span className="text-xs font-medium">Images</span>
          </div>
          <div
            className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
          >
            <span className="text-2xl">
              <FaFolderOpen />
            </span>
            <span className="text-xs font-medium">Project</span>
          </div>
          <div
            className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
          >
            <span className="text-2xl">
              <TbBackground />
            </span>
            <span className="text-xs font-medium">Background</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSlide;
