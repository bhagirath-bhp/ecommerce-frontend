import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: true,
});

export const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: false, // Set your initial login state here
});
