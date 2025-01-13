import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  sellingProductState,
  currentProductState,
} from "../../recoil/atoms/productAtoms";
import { ProductRequest } from "../../caller/api-requestor";

const ProductDetail = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("US Men's 8.5");
  const { id } = useParams();
  const navigate = useNavigate();

  const [selling, setselling] = useRecoilState(sellingProductState);
  const setCurrentProduct = useSetRecoilState(currentProductState);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isSizeAvailable = selling?.some((item) => item.size === selectedSize);

  const handleBuyNow = (size, price) => {
    const currentProductOrder = {
      ...product,
      sellingPrice: parseFloat(price),
      selectedSize: size,
    };

    setCurrentProduct(() => [currentProductOrder]);
    navigate("/product-order/buy");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const selling = await ProductRequest.getSellingProduct(id);
        setselling(selling);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={product.img}
            alt={product.product_name}
            className="w-full max-w-md object-contain"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.product_name}</h1>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(parseFloat(e.target.value))}
              className="border rounded-md p-2 w-full"
            >
              <option value={6.5}>US 6</option>
              <option value={6.5}>US 6.5</option>
              <option value={7}>US 7</option>
              <option value={7.5}>US 7.5</option>
              <option value={8}>US 8</option>
              <option value={8.5}>US 8.5</option>
              <option value={9}>US 9</option>
              <option value={9.5}>US 9.5</option>
              <option value={10}>US 10</option>
              <option value={10.5}>US 10.5</option>
              <option value={11}>US 11</option>
            </select>
          </div>
          {isSizeAvailable ? (
            selling
              .filter((product) => product.size === selectedSize)
              .map((product, key) => (
                <div className="border rounded-lg p-4 mb-6">
                  <p className="text-xl font-bold mb-4">
                    Buy Now for{" "}
                    <span className="text-green-600">
                      ${product.selling_price}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Only{" "}
                    <span className="text-yellow-500 font-bold">
                      {product.stock}
                    </span>{" "}
                    Left!
                  </p>
                  <button
                    onClick={() =>
                      handleBuyNow(selectedSize, product.selling_price)
                    }
                    className="w-full bg-main-color text-white rounded-md py-2 mb-2"
                  >
                    Buy Now
                  </button>
                  <button className="w-full border border-gray-300 rounded-md py-2">
                    Place Bid
                  </button>
                </div>
              ))
          ) : (
            <div className="border rounded-lg p-4 mb-6 text-center">
              There is no Selling at this time but you can still Ask for a price
              <button className="w-full border border-gray-300 rounded-md py-2 mt-4">
                Place Bid
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductDetail);
