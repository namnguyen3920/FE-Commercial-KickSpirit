import { atom } from 'recoil';

export const errorState = atom({
  key: 'errorState', 
  default: '', //erro message
});
