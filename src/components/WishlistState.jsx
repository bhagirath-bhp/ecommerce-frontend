// wishlistState.js
import { atom } from 'recoil';

export const wishlistState = atom({
  key: 'wishlistState',
  default: [
    {
        id: 1,
        title: "Enchanted Crystal",
        description: "A mystical crystal with calming powers.",
        imageUrl: "path-to-image.jpg", // Replace with your image path
      },
  ], // default wishlist is empty
});
