import { api } from '../index';

export interface PetGalleryData {
    petHistoryId: number,
    name: string,
    message: string,
    imageUrl: string,
    createdAt: string
}
  
export const getPetGallery = (petId: number): Promise<PetGalleryData[]> => {
    return api
    .get(`/api/v1/pets/${petId}/gallery`)
    .then((res) => {
        return res.data.data;
    })
    .catch((error) => {
        throw error;
    });
};