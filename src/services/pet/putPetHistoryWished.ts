import { api } from '../index';
  
export const putPetHistoryWished = (
    petId: number,
    petHistoryId: number
): Promise<boolean> => {
    return api
      .put(`/api/v1/pets/${petId}/history/${petHistoryId}/wished`)
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => {
        throw err;
      });
  };