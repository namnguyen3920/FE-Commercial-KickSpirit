import React, { useEffect } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";

const ProductCard = ({ product, handleProductClick }) => {
  return (
    <div className="container">
      <div
        data-testid="product-tile"
        className="rounded-lg transition flex flex-col"
        onClick={() => handleProductClick(product.product_id)}
        style={{ cursor: "pointer", margin: "10px 0" }}
      >
        <div className="flex-1 flex justify-center items-center p-2">
          <img
            src={product.img}
            alt={product.product_name}
            className="object-contain w-full h-32"
          />
        </div>
        <div
          data-testid="product-details"
          className="flex flex-col items-start p-2"
        >
          <h3 className="text-sm font-medium mb-1">{product.product_name}</h3>
          <p className="text-lg font-bold">${product.retail_price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
