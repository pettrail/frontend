import { api } from '../index';
  
export const deletePetHistory = (
    petId: number,
    petHistoryId: number
): Promise<boolean> => {
    return api
      .delete(`/api/v1/pets/${petId}/history/${petHistoryId}`)
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => {
        throw err;
      });
  };