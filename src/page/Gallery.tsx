import { FaDog } from "react-icons/fa";
import Avatar from "../components/Avatar";
import PhotoCard from "../components/PhotoCard";
function Gallery() {
  return (
    <>
      <header className="flex justify-between items-center">
        <div className="flex items-center">
          <FaDog className="text-primary text-[1.65rem] mr-1.5" />
          <span className="text-2xl font-semibold">갤러리 모아보기</span>
        </div>
        <Avatar circleSize="w-9 h-9" svgSize="w-11 h-11" />
      </header>

      <main className="h-full overflow-y-auto flex border items-center">
        {[0, 1, 2].map((item) => (
          <PhotoCard />
        ))}
      </main>
    </>
  );
}

export default Gallery;
