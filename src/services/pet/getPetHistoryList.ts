import { api } from '../index';

export interface PetHistoryData {
    petHistoryId: number,
    content: string,
    createdAt: string,
    mediaType: string,
    name: string,
    objectType: string,
    wished: boolean
}
  
export const getPetHistoryList = (petId: number): Promise<PetHistoryData[]> => {
    return api
    .get(`/api/v1/pets/${petId}/history`)
    .then((res) => {
        return res.data.data;
    })
    .catch((error) => {
        throw error;
    });
};