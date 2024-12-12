import {atom, selector} from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        user: null,
        token: null
    }
});