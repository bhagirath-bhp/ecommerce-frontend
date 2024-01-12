// productState.js
import { atom } from 'recoil';

export const productState = atom({
  key: 'productState',
  default: {
    name: '',
    description: '',
    price: '',
    images: [],
    quantity: 0,
    categoryId: '',
    collectionId: '',
  },
});
