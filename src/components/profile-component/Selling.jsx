import React from "react";
import { useNavigate } from "react-router";
const Selling = () => {
  const nagivate = useNavigate();
  const handleSellItemClick = () => {
    nagivate("/sell");
  };
  return (
    <div className="container mx-auto p-6 min-h-screen">
      <div className="flex justify-start space-x-8 border-b-2 pb-2"></div>
      <div className="mt-12">
        <h2 className="text-center text-3xl font-bold mb-6">How it Works</h2>
        <div className="flex justify-center space-x-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="flex items-center justify-center bg-gray-200 w-16 h-16 rounded-full mb-4">
              <span className="text-green-600 text-xl font-bold">1</span>
            </div>
            <h3 className="font-bold text-xl mb-2">List Your Item</h3>
            <p className="text-gray-500">
              You can Sell Now, or set an Ask for the price you want to sell
              your item for.
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="flex items-center justify-center bg-gray-200 w-16 h-16 rounded-full mb-4">
              <span className="text-green-600 text-xl font-bold">2</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Ship</h3>
            <p className="text-gray-500">
              Ship your item within 2 business days. We authenticate, then we
              ship it to the buyer.
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="flex items-center justify-center bg-gray-200 w-16 h-16 rounded-full mb-4">
              <span className="text-green-600 text-xl font-bold">3</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Get Paid</h3>
            <p className="text-gray-500">
              We release your payouts as soon as your item passes verification.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleSellItemClick}
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Sell an Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Selling);
