import {atom, selector} from 'recoil';

export const productState = atom ({
    key: 'productState',
    default: [],
});

export const searchProductState = atom ({
    key: 'searchProductState',
    default:'',
});

export const filteredProductState = selector ({
    key: 'filteredProductState',
    get: ({ get }) => {
        const products = get(productState);
        const searchQuery = get(searchProductState).toLowerCase();
        const filteredProducts = products.filter((product) => 
            product.name.toLowerCase().includes(searchQuery)
        );

        return filteredProducts.map(product => ({
            name: product.name,
            img: product.img
        }));
    },
});