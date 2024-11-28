import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const saveSlide = () => {};
  const download = () => {};
  return (
    <div className="h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full">
      <div className="flex justify-between items-center mx-10 text-gray-300 h-full">
        <Link to="/" className="text-xl text-blue-500">
          My<span className="font-bold text-blue-800">SLIDES</span>
        </Link>

        <div className="flex justify-center items-center gap-2 text-gray-300">
          <button
            onClick={saveSlide}
            className="px-3 py-[6px] outline-none bg-[#252627] rounded-sm"
          >
            Save
          </button>
          <button
            onClick={download}
            className="px-3 py-[6px] outline-none bg-[#252627] rounded-sm"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
