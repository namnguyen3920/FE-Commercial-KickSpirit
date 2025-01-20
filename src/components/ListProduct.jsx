import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { productDetailState } from "../recoil/atoms/productAtoms";

const ListProduct = ({ title, product }) => {
  const navigate = useNavigate();
  const setProductDetail = useSetRecoilState(productDetailState);
  const handleProductClick = (product) => {
    setProductDetail(product);
    navigate(`/product/${product.product_id}`);
  };
  useEffect(() => {
    console.log("Current products in ListProduct:", product);
  }, [product]);
  return (
    <div className="container flex flex-col justify-center item-center mt-6">
      <h2 className="text-lg font-bold flex items-center">{title}</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {product.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleProductClick={() => handleProductClick(product)}
          />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ListProduct);
