import {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";
import { IoClose } from "react-icons/io5";
import { ReactComponent as GalleryIcon } from "../assets/GalleryIcon.svg";
import { colors } from "../colors";
import { IMemoriesInputs } from "../page/SignIn/MemoriesForm";
import { UseFormRegister } from "react-hook-form";

interface IImportImage {
  fileList: File[] | null;
  setFileList: Dispatch<SetStateAction<File[] | null>>;
  showImages: string[];
  setShowImages: Dispatch<SetStateAction<string[]>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
}

function ImportImages({
  fileList,
  setFileList,
  showImages,
  setShowImages,
  error,
  setError,
}: IImportImage) {
  // 이미지 상대경로 저장
  const handleAddImages: ChangeEventHandler<HTMLInputElement> = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];
    if (imageLists?.length !== 5) {
      setError("이미지를 5개 선택해주세요.");
      return;
    }
    if (imageLists) {
      setFileList(Array.from(imageLists));
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }

      if (imageUrlLists.length > 10) {
        imageUrlLists = imageUrlLists.slice(0, 10);
      }

      setShowImages(imageUrlLists);
      setError("");
    }
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <>
      <div className="border rounded-lg p-2 w-full">
        <label
          className="flex w-full justify-around"
          htmlFor="image-files"
          // onChange={handleAddImages}
        >
          <input
            type="file"
            id="image-files"
            multiple
            className="hidden"
            accept="image/*"
            onChange={handleAddImages}
          />
          {showImages.length === 0 &&
            [0, 1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="relative flex justify-center items-center p-1 border-dashed border-2 border-primary rounded-lg w-14 h-14"
              >
                <div className="absolute top-1 right-1 w-5 h-5">
                  <IoClose className="text-secondaryGray" />
                </div>
                <GalleryIcon width={32} height={32} fill={colors.primary} />
              </div>
            ))}
        </label>
        <div className="flex w-full justify-around">
          {showImages.map((image, id) => (
            <div className="relative" key={id}>
              <img
                className="w-14 h-14 object-cover object-center rounded-lg"
                src={image}
                alt={`${image}-${id}`}
              />
              <div className="absolute flex justify-center items-center top-1 right-1 rounded-full w-3 h-3 bg-gray-50 opacity-20">
                <IoClose
                  className="text-gray-900"
                  onClick={() => handleDeleteImage(id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="mr-1 mt-1 text-xs text-red-600">{error}</span>
    </>
  );
}

export default ImportImages;
