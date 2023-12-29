// states/ordersState.js
import { atom } from 'recoil';

export const ordersState = atom({
  key: 'ordersState',
  default: [
    {
      id: 1,
      productName: 'Mystical Wand',
      description: 'A wand imbued with ancient magic.',
      imageUrl: '/images/wand.jpg', // Replace with path to your image
      date: 'December 30, 2023',
      status: 'pending',
    },
    {
      id: 2,
      productName: 'Crystal Ball',
      description: 'See the future with this enchanted crystal ball.',
      imageUrl: '/images/crystal-ball.jpg', // Replace with path to your image
      date: 'December 13, 2023',
      status: 'delivered',
    },
    // Add more orders as needed...
  ],
});
