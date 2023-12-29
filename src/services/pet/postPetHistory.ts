import { api } from '../index';
import { PetHistoryData } from './getPetHistoryList';

  
export const postPetHistory = (
    petId: number,
    content: string
  ): Promise<PetHistoryData[]> => {
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