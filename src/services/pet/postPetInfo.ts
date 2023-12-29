import { formApi } from '../index';


export interface postSalesInfoRes {
    name: string;
    brandName: string;
    imagePath: [string];
    reward: number;
    affiliateUrl: string;
    deadline: string;
  }
  
  export const postPetInfo = (
    formData: FormData,
  ): Promise<postSalesInfoRes> => {

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
      .post(`/api/v1/pets/info`,formData)
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => {
        throw err;
      });
  };