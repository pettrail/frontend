import { api } from '../index';
  
export const getPetEnded = (
    petId: number,
): Promise<boolean> => {
    return api
      .get(`/api/v1/pets/${petId}/ended`)
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => {
        throw err;
      });
  };