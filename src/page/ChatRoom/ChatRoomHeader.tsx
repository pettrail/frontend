import React from "react";
import HeaderLayout from "../HeaderLayout";
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";

interface IChatRoomHeader {
  title: string;
}

function ChatRoomHeader({ title }: IChatRoomHeader) {
  return (
    <header className="backdrop-blur-sm bg-white/30 sticky h-12 px-3 top-0 flex items-center z-50">
      <Link to="/" className="z-50">
        <GoChevronLeft className="w-7 h-7 shrink-0" />
      </Link>
      <span className="-ml-7 text-center font-medium grow">{title}</span>
    </header>
  );
}

export default ChatRoomHeader;
