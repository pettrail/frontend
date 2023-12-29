import { api } from '../index';

export interface postSalesInfoRes {
    name: string;
    brandName: string;
    imagePath: [string];
    reward: number;
    affiliateUrl: string;
    deadline: string;
  }
  
  export const postPetHistory = (
    petId: number,
    content: string
  ): Promise<postSalesInfoRes> => {
    return api
      .post(`/api/v1/pets/${petId}/history`,{
        content: content
      })
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => {
        throw err;
      });
  };