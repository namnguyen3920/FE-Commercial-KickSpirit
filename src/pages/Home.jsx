import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productState } from "../recoil/atoms/productAtoms";

import ProductCard from "../components/ProductCard";
import ProductRequest from "../caller/api-requestor/ProductRequest";
import { ListProduct, SliderBanner } from "../components";

const Home = () => {
  const [products, setproducts] = useRecoilState(productState);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductRequest.getAllProducts();
        setproducts(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    console.log("Current products in Recoil:", products);
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div class="container mx-auto px-4 my-3 flex flex-col flex-grow justify-center items-center overflow-y-auto">
      <div className="justify-center items-center w-full h-full">
        <SliderBanner />
      </div>
      <ListProduct title={"All Product"} product={products} />
    </div>
  );
};

export default React.memo(Home);
