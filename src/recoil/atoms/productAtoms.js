import {atom, selector} from 'recoil';

export const productState = atom ({
    key: 'productState',
    default: [],
});

export const currentProductState = atom ({
    key:'currentProductState',
    default: [],
    effects: [
      ({ onSet, setSelf }) => {
        const currentProduct = localStorage.getItem("currentProduct");
        if (currentProduct) {
          setSelf(JSON.parse(currentProduct));
        }
  
        onSet((newProduct) => {
          if (newProduct) {
            localStorage.setItem("currentProduct", JSON.stringify(newProduct));
          } else {
            localStorage.removeItem("currentProduct");
          }
        });
      },
    ],
});

export const productRelatedState = atom ({
  key: 'productRelatedState',
  default: [],
});

export const sellingProductState = atom ({
  key: 'sellingProductState',
  default: [],
});

export const buyingProductState = atom ({
  key: 'buyingProductState',
  default: [],
});

export const productDetailState = atom ({
    key: 'productDetailState',
    default: [],
    effects: [
        ({ onSet, setSelf }) => {
          const savedProduct = localStorage.getItem("selectedProduct");
          if (savedProduct) {
            setSelf(JSON.parse(savedProduct));
          }
    
          onSet((newProduct) => {
            if (newProduct) {
              localStorage.setItem("selectedProduct", JSON.stringify(newProduct));
            } else {
              localStorage.removeItem("selectedProduct");
            }
          });
        },
      ],
})

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