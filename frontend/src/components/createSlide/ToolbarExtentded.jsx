import React from "react";
import { LiaSquareSolid } from "react-icons/lia";
import { RiArrowLeftWideLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

import { IoTriangle } from "react-icons/io5";
import TemplateDesign from "./TemplateDesign";
import MyImages from "./MyImages";
const ToolbarExtentded = ({ show, setShow, state }) => {
  return (
    <div className="h-full w-[calc(100%-75px)]">
      <div
        className={`${
          show.status ? "p-0 -left-[350px]" : "px-8 left-[75px] py-5"
        } bg-[#252627] h-full fixed transition-all w-[350px] z-30  duration-700`}
      >
        <div
          onClick={() => setShow({ name: "", status: true })}
          className="flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 
       text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-lg"
        >
          <RiArrowLeftWideLine />
        </div>
        <div className="">
          {state === "design" && (
            <div className="">
              <TemplateDesign />
            </div>
          )}
          {state === "shape" && (
            <div className="grid grid-cols-3">
              <LiaSquareSolid className="size-[100px] cursor-pointer " />
              <FaCircle className="size-[90px] cursor-pointer " />
              <IoTriangle className="size-[90px] cursor-pointer " />
            </div>
          )}
          {state === "image" && (
            <div>
              <MyImages />
            </div>
          )}
          {state === "text" && <div>text</div>}
          {state === "project" && <div>project</div>}
          {state === "initImage" && <div>put image</div>}
          {state === "background" && <div>background</div>}
        </div>
      </div>
    </div>
  );
};

export default ToolbarExtentded;
