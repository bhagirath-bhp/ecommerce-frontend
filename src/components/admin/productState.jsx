// productState.js
import { atom } from 'recoil';

export const productState = atom({
  key: 'productState',
  default: {
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: '', // Added category field
    images: [],
    variantName: '',
  },
});
