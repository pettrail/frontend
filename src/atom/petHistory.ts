// import { atom } from 'recoil';

import { atom } from "recoil";
import { PetGalleryData } from "../services/pet/getPetGallery";

export const currentAddressNumAtom = atom<number>({
  key: "currentAddressNum",
  default: 0,
});

export interface petHistoryData {
  petHistoryId: number;
  content: string;
  createdAt: string;
  mediaType: string;
  name: string;
  objectType: string;
  wished: boolean;
}

export const petHistoryDataListAtom = atom<petHistoryData[]>({
  key: "petHistoryDataList",
  default: [],
});

// export const editRegistrationModeAtom = atom<boolean>({
//   key: 'editRegistrationMode',
//   default: false,
// });

// export interface addrRegForm {
//   recipientName: string;
//   locationName: string;
//   address: string;
//   detailAddress: string;
//   firstPhoneNum: string;
//   middlePhoneNum: string;
//   lastPhoneNum: string;
//   zipCode: string;
// }

// export const addrRegFormAtom = atom<addrRegForm>({
//   key: 'addrRegForm',
//   default: {
//     recipientName: '',
//     locationName: '',
//     address: '',
//     detailAddress: '',
//     firstPhoneNum: '010',
//     middlePhoneNum: '',
//     lastPhoneNum: '',
//     zipCode: '',
//   },
// });

// export const isDefaultAddressAtom = atom<boolean>({
//   key: 'isDefaultAddress',
//   default: false,
// });

// export const searchPopupVisibleAtom = atom<boolean>({
//   key: 'searchPopupVisible',
//   default: false,
// });

// export const addressListAtom = atom<AddressData[]>({
//   key: 'addressList',
//   default: [],
// });

export const petGalleryDataListAtom = atom<PetGalleryData[]>({
  key: "petGalleryDataList",
  default: [],
});
