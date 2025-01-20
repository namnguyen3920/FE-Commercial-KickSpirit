import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { buyingProductState } from "../../recoil/atoms/productAtoms";
import { useNavigate } from "react-router";
import OrderConfirmationModal from "./OrderConfirmationModal";
import ProceedToLoginModal from "./ProceedToLoginModal";
import ProductRequest from "../../caller/api-requestor/ProductRequest";

const ReviewOrder = ({ setView, currentProduct, orderDetails, buying }) => {
  const navigate = useNavigate();
  const { street, ward, district, city } = buying.shipping_address;
  const shippingAddress = `${street}, ${ward}, ${district}, ${city}`;
  const [isOrderConfirmationModalOpen, setIsOrderConfirmationModalOpen] =
    useState(false);
  const [isLoginRequiredModalOpen, setIsLoginRequiredModalOpen] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const formData = {
    ...buying,
    shipping_address: `${street}, ${ward}, ${district}, ${city}`,
  };

  const handlePlaceOrderClick = () => {
    setIsOrderConfirmationModalOpen(true);
    const addBuying = async () => {
      try {
        setIsLoading(true);
        const response = await ProductRequest.addBuyingProduct(formData);
      } catch (err) {
        console.error("Error placing order:", err);
        setError(err.message);
      }
    };
    addBuying();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Review Order</h2>
        <p className="text-gray-600 mb-6">
          Please confirm your purchase details below
        </p>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700">Your Purchase Price</span>
            <span className="font-bold text-lg">
              ${currentProduct.sellingPrice}
            </span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 flex items-center">
              Processing Fee (included vertification + processing fee)
            </span>
            <span className="font-bold text-lg">${orderDetails.process}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700">Shipping</span>
            <span className="font-bold text-lg">$10</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-800 font-bold">Total</span>
            <span className="font-bold text-xl text-main-color">
              ${orderDetails.subtotal}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between items-center border rounded-lg p-4">
          <div>
            <p className="font-bold">Standard Shipping</p>
            <p className="text-gray-600 text-sm">
              Ships to Kickspirit first for Verification
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border rounded-lg p-4">
          <div>
            <p className="font-bold">Visa ending in 8818</p>
          </div>
        </div>
        <div className="flex justify-between items-center border rounded-lg p-4">
          <div>
            <p className="font-bold">{shippingAddress}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => {
            setView("details");
          }}
          className="px-6 py-2 border border-gray-700 rounded-md text-gray-700"
        >
          Back
        </button>
        <button
          onClick={handlePlaceOrderClick}
          className="px-6 py-2 bg-main-color text-white rounded-md"
        >
          Place Order
        </button>
      </div>
      {/* <ProceedToLoginModal
        isOpen={isLoginRequiredModalOpen}
        onClose={() => setIsLoginRequiredModalOpen(false)}
        onProceedToLogin={() => {
          setIsLoginRequiredModalOpen(false);
          navigate("/login");
        }}
      /> */}

      <OrderConfirmationModal
        isOpen={isOrderConfirmationModalOpen}
        orderDetails={orderDetails}
      />
    </div>
  );
};

export default ReviewOrder;
