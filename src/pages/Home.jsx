import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { productState } from '../recoil/atoms/productAtoms';

import ProductCard from '../components/ProductCard';
import ProductRequest from '../caller/api-requestor/ProductRequest';


const Home = () => {
  const [products, setproducts] = useRecoilState(productState);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productRequest = new ProductRequest();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productRequest.getAllProducts();
        setproducts(response);
        console.log(products);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div class="container mx-auto my-40 flex-grow overflow-y-auto">
      <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={product.index}
            _id={product._id}
            img={product.img}
            productName={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );

};

export default React.memo(Home);