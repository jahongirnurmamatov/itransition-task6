import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { FaFolderClosed } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { GrTemplate } from "react-icons/gr";
const Sidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <div className="w-full flex">
      <div className="w-[300px] p-5 h-[calc(100vh-70px)] fixed ">
        <div className="px-2 py-2 flex justify-start gap-5 items-center">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzgup07l-IhHq_3j2u1iEK9tJWGJGKInZWA&s"
                alt=""
              />
            </div>
          </div>
          <span>John Doe</span>
        </div>
        <ul className="px-4 mt-4 flex flex-col gap-2">
          <li>
            <Link to={'/'}
              className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${
                pathname === "/" ? "bg-[#ffffff26]" : ""
              } rounded-md`}
            >
              <span className="text-xl">
                <FaHome />
              </span>
              <span className="font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link to={'/projects'}
              className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${
                pathname === "/projects" ? "bg-[#ffffff26]" : ""
              } rounded-md`}
            >
              <span className="text-xl">
                <FaFolderClosed />
              </span>
              <span className="font-medium">My Projects</span>
            </Link>
          </li>
          <li>
            <Link to={'/all-projects'}
              className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${
                pathname === "/all-projects" ? "bg-[#ffffff26]" : ""
              } rounded-md`}
            >
              <span className="text-xl">
                <GrProjects />
              </span>
              <span className="font-medium">All projects</span>
            </Link>
          </li>
          <li>
            <Link to={'/templates'}
              className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${
                pathname === "/all-projects" ? "bg-[#ffffff26]" : ""
              } rounded-md`}
            >
              <span className="text-xl">
                <GrTemplate />
              </span>
              <span className="font-medium">Templates</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
