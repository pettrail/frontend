import React, { useState } from "react";
import { FaDog } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdImage } from "react-icons/md";
import { ReactComponent as GalleryIcon } from "../assets/GalleryIcon.svg";
import { ReactComponent as MemorialIcon } from "../assets/MemorialIcon.svg";
import { ReactComponent as ChatIcon } from "../assets/ChatIcon.svg";
import { colors } from "../colors";

function NavigationBar() {
  let { pathname } = useLocation();
  return (
    <footer className="absolute h-16 flex items-stretch bg-white bottom-0 inset-x-0">
      <Link
        to="/gallery"
        className={`flex flex-col justify-center items-center w-1/3 ${
          pathname === "/gallery" ? "text-primary" : "text-secondaryGray"
        }`}
      >
        <GalleryIcon
          width={28}
          height={28}
          fill={pathname === "/gallery" ? colors.primary : colors.secondaryGray}
        />
        <span className="text-sm font-semibold">추억 갤러리</span>
      </Link>
      <div className="h-full w-1/3 flex justify-center relative">
        <div className="absolute bg-gray-50 bottom-[42%] rounded-full h-[4.5rem] w-[4.5rem]" />
        <Link
          to="/"
          className="flex justify-center items-center absolute bottom-[55%] rounded-full bg-primary h-14 w-14 shadow-primaryBlur"
        >
          <ChatIcon width={31} height={31} stroke="white" />
        </Link>
      </div>
      <Link
        to="/memorial"
        className={`flex flex-col justify-center items-center w-1/3 ${
          pathname === "/memorial" ? "text-primary" : "text-secondaryGray"
        }`}
      >
        <MemorialIcon
          width={30}
          height={30}
          fill={
            pathname === "/memorial" ? colors.primary : colors.secondaryGray
          }
        />
        <span className="mt-1 text-sm font-semibold">기억 공간</span>
      </Link>
    </footer>
  );
}

export default NavigationBar;
