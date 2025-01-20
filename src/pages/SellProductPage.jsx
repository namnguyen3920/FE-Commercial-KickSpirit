import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  productState,
  searchProductState,
  filteredProductState,
} from "../recoil/atoms/productAtoms";
import { ProductRequest } from "../caller/api-requestor";
import { SecondaryHeader } from "../components";
import { Outlet } from "react-router";

const SellProductPage = () => {
  const [products, setProducts] = useRecoilState(productState);
  const [searchState, setSearchState] = useRecoilState(searchProductState);
  const filteredProducts = useRecoilValue(filteredProductState);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductRequest.getAllProducts();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [setProducts]);

  return (
    <div className="container mx-auto p-6">
      <header className="sticky w-full top-0 z-50">
        <SecondaryHeader />
      </header>
      <main className="flex-grow p-4 pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default React.memo(SellProductPage);
