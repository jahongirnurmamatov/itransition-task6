import React from "react";

import { RiArrowLeftWideLine } from "react-icons/ri";
import TemplateDesign from "./TemplateDesign";
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
          {state === "shape" && <div >shape</div>}
          {state === "image" && <div>image</div>}
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
