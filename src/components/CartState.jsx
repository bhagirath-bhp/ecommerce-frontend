// cartState.js
import { atom } from 'recoil';

export const cartState = atom({
  key: 'cartState',
  default: [
    {
      id: 2,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ...',
      price: 489,
      quantity: 2,
      total: 978,
    },
    // ... add more products as needed
  ],
});
