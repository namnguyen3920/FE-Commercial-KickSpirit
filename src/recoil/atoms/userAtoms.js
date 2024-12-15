import {atom, selector} from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        user: null,
        token: null
    }
}); 

export const userAdminState = atom ({
    key: 'userAdminState',
    default: [],
})