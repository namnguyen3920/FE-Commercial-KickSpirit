import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { GeneralRequest, ProductRequest } from "../../caller/api-requestor";
import { sellingProductState } from "../../recoil/atoms/productAtoms";

const SellProductDetail = () => {
  // const { product_id } = useParams();
  //const [product, setProduct] = useState();
  const location = useLocation();
  const sellingProduct = location.state;
  const [size, setSize] = useState();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState("US");
  useEffect(() => {
    const fetchSize = async () => {
      try {
        const sizeRes = await GeneralRequest.getSize();
        console.log("Size Response:", sizeRes);
        setSize(sizeRes);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchSize();
  }, []);

  useEffect(() => {
    console.log("product", sellingProduct);
  }, [sellingProduct]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleReviewAsk = () => {
    if (selectedSize) {
      alert(`You selected size ${selectedSize} in ${selectedUnit}.`);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 p-6 min-h-screen bg-gray-100">
      {sellingProduct.map((product) => (
        <>
          <div className="flex-1 flex justify-center items-center">
            <img
              src={product.img}
              alt={product.product_name}
              className="max-w-xs lg:max-w-md object-contain"
            />
          </div>
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{product.product_name}</h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-6">
              {size.map((sizeItem) => (
                <button
                  key={sizeItem.size}
                  onClick={() => handleSizeClick(sizeItem.size)}
                  className={`flex flex-col items-center p-3 rounded-lg border shadow-sm ${
                    selectedSize === sizeItem.size
                      ? "bg-green-100 border-green-500"
                      : "bg-white border-gray-300"
                  } hover:shadow-md`}
                >
                  <span className="text-gray-800 font-bold">
                    {selectedUnit} {sizeItem.size}
                  </span>
                  <span className="text-green-600 font-medium">
                    ${sizeItem.price}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => alert("Cancelled")}
                className="text-gray-500 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleReviewAsk}
                className={`px-4 py-2 rounded-lg ${
                  selectedSize
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!selectedSize}
              >
                Review Ask
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default React.memo(SellProductDetail);
