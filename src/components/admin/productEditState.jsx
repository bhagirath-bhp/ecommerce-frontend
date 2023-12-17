// productEditState.js
import { atom } from 'recoil';

export const productEditState = atom({
  key: 'productEditState',
  default: {
    id: null, // Assuming each product has a unique ID
    name: '',
    description: '',
    price: '',
    quantity: '',
    deliveryTime: '',
    images: [],
  },
});
