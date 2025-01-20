import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  productState,
  searchProductState,
  filteredProductState,
  sellingProductState,
} from "../../recoil/atoms/productAtoms";
import { ProductRequest, GeneralRequest } from "../../caller/api-requestor";
import { useNavigate } from "react-router-dom";

const SearchSellProduct = () => {
  const [products, setProducts] = useRecoilState(productState);
  const [searchState, setSearchState] = useRecoilState(searchProductState);
  const filteredProducts = useRecoilValue(filteredProductState);
  const [sellingProduct, setSellingProduct] =
    useRecoilState(sellingProductState);
  const [size, setSize] = useState();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState("US");
  const navigate = useNavigate();

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
  useEffect(() => {
    console.log("filteredProducts", filteredProducts);
  });
  const handleProductClick = (productId) => {
    fetchProduct(productId);
    navigate(`/sell/${productId}`, { state: sellingProduct });
  };
  const fetchProduct = async (product_id) => {
    try {
      const response = await ProductRequest.getProductById(product_id);
      console.log("Response from API:", response);
      const sizeRes = await GeneralRequest.getSize();
      console.log("Size Response:", sizeRes);
      setSize(sizeRes);
      setSellingProduct(response);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  return (
    <>
      <div className="mt-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Choose a product</h2>
        <p className="text-gray-500 mb-4">
          Find the product you're looking for to continue
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for product."
            value={searchState}
            onChange={(e) => setSearchState(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 3a6 6 0 100 12 6 6 0 000-12zM2 9a7 7 0 1112.9 4.32l4.387 4.387a1 1 0 11-1.414 1.414l-4.387-4.387A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            //onClick={() => handleProductClick(product.id)}
          >
            <img
              src={product.img || "https://via.placeholder.com/150"}
              alt={product.name}
              className="w-16 h-16 object-contain rounded-lg mr-4"
            />
            <div>
              <h3 className="font-bold text-lg">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No products found.</p>
      )}
    </>
  );
};

export default React.memo(SearchSellProduct);
