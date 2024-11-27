import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#252627] shadow-md fixed left-0 top-0 w-full z-20">
      <div className="w-[90%] m-auto py-3">
        <div className="flex justify-between items-center">
          <div className="w-[80px] h-[48px]">
            <p className="text-xl text-blue-500">
              My<span className="font-bold text-blue-800">SLIDES</span>
            </p>
          </div>
          <div className="flex gap-4 justify-center items-center relative">
            <button
              onClick={() => navigate("/slides")}
              className="py-2 px-6 overflow-hidden text-center hidden hover:bg-[#9553f8] lg:block bg-[#8b3dff] text-white rounded-md"
            >
              Start Slides
            </button>
            <div className="dropdown dropdown-end">
              <div
                role="button"
                tabIndex={0}
                className="avatar cursor-pointer hover:scale-105"
              >
                <div className="mask mask-squircle w-12">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzgup07l-IhHq_3j2u1iEK9tJWGJGKInZWA&s"
                    alt=""
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <span>John Doe - johndoe@gmail.com</span>
                </li>

                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <Link>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;