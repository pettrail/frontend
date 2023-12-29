import { FaDog } from "react-icons/fa";
import Avatar from "../components/Avatar";
function Gallery() {
  return (
    <div className="p-3 mobile:p-4">
      <div className="flex justify-end items-center">
        <Avatar circleSize="w-9 h-9" svgSize="w-11 h-11" />
      </div>
      <header className="flex items-center">
        <FaDog className="text-primary text-[1.65rem] mr-1.5" />
        <span className="text-2xl font-semibold">갤러리 모아보기</span>
      </header>
    </div>
  );
}

export default Gallery;
