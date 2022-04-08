import { atom } from 'recoil';

export const summonerState = atom({
  key: 'summonerState',
  default: {
    name: '',
  },
});
