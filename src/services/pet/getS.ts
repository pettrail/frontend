import { api, formApi } from '../index';

export interface postSalesInfoRes {
  name: string;
  brandName: string;
  imagePath: [string];
  reward: number;
  affiliateUrl: string;
  deadline: string;
}

// 판매 상품 정보 가져오기
export const postSalesInfo = (
  product_code: string,
): Promise<postSalesInfoRes> => {
  return api
    .post(`/api/v1/affiliates/${product_code}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};

export interface AddressData {
    id: number;
    shippingAddressName: string;
    recipientName: string;
    zipCode: string;
    address: string;
    addressDetail: string;
    contactNumber: string;
    isDefaultAddress: boolean;
  }
  
// 등록된 주소지 리스트 가져오기
export const getAddressList = (): Promise<AddressData[]> => {
    return api
        .get(`/api/v1/my/addresses`)
        .then((res) => {
        return res.data.data;
        })
        .catch((error) => {
        throw error;
        });
};


// 배송지 아이템 삭제
export const deleteAddressItem = (addr_no: number): Promise<number> => {
  return api
    .delete(`/api/v1/my/addresses/${addr_no}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const postReview = (
    formData: FormData,
    product_code: string,
  ): Promise<string> => {
    return formApi
      .post(`/api/v1/products/${product_code}/review`, formData)
      .then((res) => {
        return res.data.data;
      });
  };