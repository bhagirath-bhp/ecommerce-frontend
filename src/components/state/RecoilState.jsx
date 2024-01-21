import { atom } from 'recoil';

const localStorageEffect = key => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

export const userState = atom({
  key: 'userState',
  default: JSON.parse(localStorage.getItem('userState')) || false,
  effects: [
    localStorageEffect('userState')
  ]
});

export const toastState = atom({
  key: 'toastState',
  default: [],
});

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

export const addressListState = atom({
  key: 'addressListState',
  default: [],
});