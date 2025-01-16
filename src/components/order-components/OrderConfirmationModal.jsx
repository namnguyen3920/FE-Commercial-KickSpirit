import React from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmedModal = ({ isOpen, orderDetails }) => {
  const navigate = useNavigate();
  const handleOnContinue = () => {
    navigate("/");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-main-color">
            ✔️ ORDER CONFIRMED
          </h2>
          <p className="mt-2 text-gray-600">
            Your order has been successfully placed!
          </p>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <span>Purchase Price:</span>
            <span className="font-bold">${orderDetails.product_price}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span>Shipping:</span>
            <span className="font-bold">$10</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span>Processing (included process + authentication):</span>
            <span className="font-bold text-main-color">
              ${orderDetails.process}
            </span>
          </div>
          <div className="flex justify-between items-center mt-4 border-t pt-2">
            <span className="font-bold">TOTAL:</span>
            <span className="font-bold text-lg tex-main-color">
              ${orderDetails.subtotal}
            </span>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-700 text-sm">A few things to remember:</p>
          <ul className="text-gray-600 text-sm list-disc pl-4 mt-2 space-y-1">
            <li>
              The seller is allowed 2 full business days to ship your item to
              StockX.
            </li>
            <li>
              Our expert authenticators will verify the product upon arrival.
            </li>
            <li>
              You will receive a tracking number once your item leaves the
              authentication center.
            </li>
          </ul>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleOnContinue}
            className="px-6 py-2 bg-main-color text-white rounded-md"
          >
            View Order
          </button>
          <button
            onClick={handleOnContinue}
            className="px-6 py-2 bg-main-color text-white rounded-md"
          >
            Continue Browse
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmedModal;
