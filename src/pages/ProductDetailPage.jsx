import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productDetailState } from "../recoil/atoms/productAtoms";
import ProductDetail from "../components/product-detail/ProductDetail";
import ProductDescription from "../components/product-detail/ProductDescription";
import { ListProduct } from "../components";
const ProductDetailPage = () => {
  const product = useRecoilValue(productDetailState);
  const productRelated = useRecoilValue(productDetailState);
  console.log("Product from Detail", product);
  return (
    <>
      <div className="container mx-auto px-4 my-3 flex flex-col flex-grow justify-center items-center overflow-y-auto">
        <ProductDetail product={product} />
        <hr />
        <ProductDescription product={product} />
        <hr />
        {/* /<ListProduct product={productRelated} /> */}
      </div>
    </>
  );
};

export default React.memo(ProductDetailPage);
