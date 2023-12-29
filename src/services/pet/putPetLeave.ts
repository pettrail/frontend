import { api } from '../index';

export interface postSalesInfoRes {
    name: string;
    brandName: string;
    imagePath: [string];
    reward: number;
    affiliateUrl: string;
    deadline: string;
  }
  
export const putPetLeave = (
    petId: number,
    isPetLeave: boolean
): Promise<boolean> => {
    return api
      .put(`/api/v1/pets/${petId}/leave`,{
        petLeave: isPetLeave
      })
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => {
        throw err;
      });
  };