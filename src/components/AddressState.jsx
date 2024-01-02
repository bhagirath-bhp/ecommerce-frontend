// atoms/addressState.js
import { atom } from 'recoil';

export const addressState = atom({
  key: 'addressState',
  default: [], // Initial state is an empty array
});

export const countryState = atom({
  key: 'countryState',
  default: '', // Default selected country
});

export const stateOptionsState = atom({
  key: 'stateOptionsState',
  default: [], // States based on the selected country
});
