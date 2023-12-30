import Badge from "./Badge";
import DummyImage from "../assets/images/puppy1.jpeg";
import Button from "./Button";
import { PetGalleryData } from "../services/pet/getPetGallery";
import { BsQuestion } from "react-icons/bs";

interface PetGalleryProps {
  petGalleryData?: PetGalleryData;
}

const PhotoCard: React.FC<PetGalleryProps> = ({ petGalleryData }) => {
  return (
    <>
      {petGalleryData ? (
        <div className="shrink-0 h-[27.5rem] w-72 bg-white rounded-lg p-3 ml-5 ml-2">
          <img
            className="h-[20rem] w-full object-cover object-center rounded-lg"
            alt="petImage"
            src={petGalleryData?.imageUrl}
          />
          <div className="mt-3 flex flex-col items-center space-y-0.5">
            <Badge
              bgColor="bg-primaryLight"
              textColor="text-primary"
              label={petGalleryData?.name}
            />
            <div className="text-lg font-medium">
              {new Intl.DateTimeFormat("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }).format(new Date(petGalleryData?.createdAt))}
            </div>
            <div>{petGalleryData?.message}</div>
            <Button color="bg-primary" text="추억 돌아보기" width="w-full" />
          </div>
        </div>
      ) : (
        <div className="shrink-0 h-[27.5rem] w-72 bg-white rounded-lg p-3">
          <div className="relative">
            <img
              className="h-[20rem] w-full object-cover object-center rounded-lg"
              alt="petImage"
              src={DummyImage}
            />
            <div className="flex justify-center items-center absolute top-0 inset-x-0 h-full rounded-lg z-50 backdrop-blur-md">
              <BsQuestion className="text-6xl text-secondaryGray opacity-30" />
            </div>
          </div>

          <div className="mt-3 flex flex-col items-center space-y-0.5">
            <Badge
              bgColor="bg-primaryLight"
              textColor="text-primary"
              label={"? 일째"}
            />
            <div className="text-lg font-medium">????년 ??월 ??일</div>
            <div>저장된 포토카드가 없어요!</div>
            <Button color="bg-primary" text="추억 돌아보기" width="w-full" />
          </div>
        </div>
      )}
    </>
  );
};
export default PhotoCard;
