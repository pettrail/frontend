import { formApi } from "../index";

export const postPetInfo = (data: any): Promise<number> => {
  // const formData = new FormData();

  // formData.append("petInfo", JSON.stringify(data.petInfo));
  // // @ts-ignore
  // Array.from(data.petImage).forEach((el) => {
  //   formData.append("petImage", el);
  // });

  // {
  //   "petInfo": {
  //     "petType": "string",
  //     "name": "string",
  //     "feature": "string"
  //   },
  //   "petImage": "string"
  // }

  // export const reviewImgListAtom = atom<File[]>({
  //   key: 'reviewImgList',
  //   default: [],
  // });

  // const reviewImgList = useRecoilValue(reviewImgListAtom);
  // const reviewRequest = {
  //   reviewContent: reviewText,
  //   starRate: starNum.toString(),
  // };
  // const reviewRequestBlob = new Blob([JSON.stringify(reviewRequest)], {
  //   type: 'application/json',
  // });
  // formData.append('reviewRequest', reviewRequestBlob);

  // for (const reviewImg of reviewImgList) {
  //   formData.append('reviewImages', reviewImg);
  // }

  return formApi
    .post(`/api/v1/pets/info`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
