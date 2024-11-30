import React from "react";
import { LiaSquareSolid } from "react-icons/lia";
import { RiArrowLeftWideLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import TemplateDesign from "./TemplateDesign";
import MyImages from "./MyImages";
import Images from "./Images";
import Backgrounds from "./Backgrounds";

const ToolbarExtentded = ({
  show,
  setShow,
  state,
  addShape
}) => {

  return (
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
      <div>
        {state === "design" && (
          <div>
            <TemplateDesign />
          </div>
        )}
        {state === "shape" && (
          <div className="grid grid-cols-3 gap-4">
            <LiaSquareSolid
              onClick={() => addShape("rect")}
              className="size-[100px] cursor-pointer text-gray-300 hover:text-gray-100"
            />
            <FaCircle
              onClick={() => addShape("circle")}
              className="size-[90px] cursor-pointer text-gray-300 hover:text-gray-100"
            />
            <IoTriangle
              onClick={() => addShape("triangle")}
              className="size-[90px] cursor-pointer text-gray-300 hover:text-gray-100"
            />
          </div>
        )}
        {state === "image" && (
          <div>
            <MyImages onSelectImage={(src) => addImage(src)} />
          </div>
        )}
        {state === "text" && (
          <div className="grid grid-cols-1 gap-2">
            <div className="bg-[#3c3c3d] cursor-pointer font-bold p-3 flex items-center justify-center text-white text-xl rounded-sm">
              <h2>Add a text</h2>
            </div>
          </div>
        )}
        {state === "project" && <div>project</div>}
        {state === "initImage" && (
          <div className="h-[88vh] overflow-x-auto flex justify-start items-start">
            <Images onSelectImage={(src) => addImage(src)} />
          </div>
        )}
        {state === "background" && (
          <div>
            <Backgrounds />
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolbarExtentded;
