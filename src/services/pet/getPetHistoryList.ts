import { api } from '../index';

export interface PetHistoryData {
    petHistoryId: number,
    content: string,
    createdAt: string
}
  
export const getPetHistoryList = (): Promise<PetHistoryData[]> => {
    return api
    .get(`/api/v1/my/addresses`)
    .then((res) => {
        return res.data.data;
    })
    .catch((error) => {
        throw error;
    });
};