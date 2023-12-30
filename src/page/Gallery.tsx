import { FaDog } from "react-icons/fa";
import Avatar from "../components/Avatar";
import PhotoCard from "../components/PhotoCard";
import { useEffect } from "react";
import { getPetGallery } from "../services/pet/getPetGallery";
import { useRecoilState } from "recoil";
import { petGalleryDataListAtom } from "../atom/petHistory";
import { ReactComponent as Logo } from "../assets/Logo.svg";

function Gallery() {
  const petId =
    localStorage.getItem("petId") && localStorage.getItem("petId")?.length !== 0
      ? parseInt(localStorage.getItem("petId")!!)
      : 1;
  // const petId = 1;

  const [petGalleryDataList, setPetGalleryDataList] = useRecoilState(
    petGalleryDataListAtom
  );
  useEffect(() => {
    getPetGallery(petId)
      .then((res) => {
        setPetGalleryDataList(res);
      })
      .catch(() => {});
  }, []);
  return (
    <>
      <header className="flex justify-between items-center">
        <div className="flex items-center">
          <Logo width={40} height={40} />
          <span className="ml-1 text-2xl font-semibold">갤러리 모아보기</span>
        </div>
        <Avatar circleSize="w-9 h-9" svgSize="w-11 h-11" />
      </header>

      <main
        className={`mt-11 h-full w-full overflow-y-auto flex scrollbar-hide ${
          petGalleryDataList.length === 0 ? "justify-center" : ""
        }`}
      >
        {petGalleryDataList.length !== 0 ? (
          petGalleryDataList.map((petGalleryData) => (
            <PhotoCard petGalleryData={petGalleryData} />
          ))
        ) : (
          <PhotoCard />
        )}
      </main>
    </>
  );
}

export default Gallery;
