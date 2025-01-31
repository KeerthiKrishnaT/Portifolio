import React from "react";
import {
  AiOutlineHome,
  AiFillStar,
} from "react-icons/ai";
import { FiUser, FiFileText } from "react-icons/fi";
import { DiGitBranch } from "react-icons/di";
import { Link } from "react-router-dom";
function MobileNav({ showNav, setShowNav }) {
  return (
    <div
      className={
        showNav
        ? "fixed h-1/2 bg-gradient-to-r from-purple-900 to-violet-900 w-full top-[68px] left-0 rounded-b-md border-2 border-t-0 border-purple-700 z-50 transition-all duration-[500ms] overflow-y-auto"
        : "fixed h-0 bg-gradient-to-r from-purple-900 to-violet-900 w-full top-[68px] left-0 rounded-b-md z-50 transition-all duration-[500ms] overflow-hidden"
    }
    >
      <div className=" block items-center justify-center text-white p-4">
        <ul className="flex gap-8 flex-col mt-10">
          <li className="relative group">
            <Link
              to={"/"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
              onClick={() => setShowNav(false)} aria-label="Home"
            >
              <AiOutlineHome fontSize={20} aria-hidden="true"/>
              <span className="">Home</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/about"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
              onClick={() => setShowNav(false)}
            >
              <FiUser fontSize={20} />
              <span className="">About</span>
            </Link>
          </li>
          <li className="relative group">
          <a
              href="/Keerthi Resume.pdf"
              download
              className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
              onClick={() => setShowNav(false)}
            >
              <FiFileText fontSize={20} />
              <span className="">Resume</span>
      </a>
          </li>
        </ul>

        <a
          href="https://github.com/KeerthikrishnaT"
          target="_blank"
          rel="noreferrer"
          className="flex w-24 my-5 mx-auto gap-2 justify-center items-center text-lg bg-fuchsia-900 px-3 py-[3px] border border-purple-700 rounded-sm hover:bg-fuchsia-800 transition-colors duration-200"
        >
          <DiGitBranch fontSize={18} aria-hidden="true"/>
          <AiFillStar fontSize={18} aria-hidden="true"/>
        </a>
      </div>
    </div>
  );
}

export default MobileNav;
