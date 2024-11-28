import React from "react";
import { CiGrid42 } from "react-icons/ci";
import { FaImages, FaShapes, FaFolderOpen } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { TfiText } from "react-icons/tfi";
import { TbBackground } from "react-icons/tb";
const Toolbar = ({setElements,show}) => {
  return (
    <div className="w-[80px] bg-[#181918] z-50 h-full text-gray-400 overflow-y-auto">
      <div
        onClick={() => setElements("design", "design")}
        className={`
            ${show.name==='design' ? 'bg-[#252627]':''}
            w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
      >
        <span className="text-2xl">
          <CiGrid42 />
        </span>
        <span className="text-xs font-medium">Design</span>
      </div>
      <div
        onClick={() => setElements("shape", "shape")}
        className={` ${show.name==='shape' ? 'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
      >
        <span className="text-2xl">
          <FaShapes />
        </span>
        <span className="text-xs font-medium">Shapes</span>
      </div>
      <div
        onClick={() => setElements("image", "uploadImage")}
        className={`w-full h-[80px]  ${show.name==='uploadImage' ? 'bg-[#252627]':''} cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
      >
        <span className="text-2xl">
          <IoMdCloudUpload />
        </span>
        <span className="text-xs font-medium">Upload</span>
      </div>
      <div
        onClick={() => setElements("text", "designText")}
        className={`w-full h-[80px]  ${show.name==='designText' ? 'bg-[#252627]':''} cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
      >
        <span className="text-2xl">
          <TfiText />
        </span>
        <span className="text-xs font-medium">Text</span>
      </div>
      <div
        onClick={() => setElements("initImage", "image")}
        className={`w-full h-[80px]  ${show.name==='image' ? 'bg-[#252627]':''} cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
      >
        <span className="text-2xl">
          <FaImages />
        </span>
        <span className="text-xs font-medium">Images</span>
      </div>
      <div
        onClick={() => setElements("project", "projects")}
        className={`w-full h-[80px]  ${show.name==='projects' ? 'bg-[#252627]':''} cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
      >
        <span className="text-2xl">
          <FaFolderOpen />
        </span>
        <span className="text-xs font-medium">Project</span>
      </div>
      <div
        onClick={() => setElements("background", "background")}
        className={`w-full h-[80px]  ${show.name==='background' ? 'bg-[#252627]':''} cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
      >
        <span className="text-2xl">
          <TbBackground />
        </span>
        <span className="text-xs font-medium">Background</span>
      </div>
    </div>
  );
};

export default Toolbar;
