import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productDetailState } from "../../recoil/atoms/productAtoms";

const ProductDescription = ({ product }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">Product Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p>
            <span className="font-semibold">Retail Price:</span> $
            {product.retail_price}
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Product Description</h3>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              showMore ? "max-h-[500px]" : "max-h-[72px]"
            }`}
          >
            <p className="text-gray-700">{product.description}</p>
          </div>

          <button
            onClick={() => setShowMore(!showMore)}
            className="text-green-600 mt-2 flex items-center"
          >
            {showMore ? "Read Less" : "Read More"}
            <span
              className={`ml-1 transform transition-transform duration-300 ${
                showMore ? "rotate-180" : ""
              }`}
            >
              ⌃
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
