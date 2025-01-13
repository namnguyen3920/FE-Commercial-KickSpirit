import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  sellingProductState,
  currentProductState,
} from "../../recoil/atoms/productAtoms";

const ProductOrder = () => {
  const currentProduct = useRecoilValue(currentProductState);
  console.log("Log product before everything: ", currentProduct);
  const shippingPrice = 10;
  const subtotal =
    currentProduct.reduce((acc, product) => acc + product.sellingPrice, 0) +
    shippingPrice;

  const [orderInfo, setOrderInfo] = useState({
    total_price: subtotal,
    f_name: "",
    l_name: "",
    street: "",
    city: "",
    ward: "",
    district: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderInfo((prev) => ({ ...prev, [name]: value }));
  };

  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [savedAddress, setSavedAddress] = useState(null);

  const navigate = useNavigate();

  const handleEditAddressClick = () => {
    setIsEditingAddress(true);
  };

  const handleSaveInfoClick = () => {
    setSavedAddress(orderInfo);
    console.log("Address: ", orderInfo);
    setIsEditingAddress(false);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center border border-black rounded-full px-4 py-2 hover:bg-gray-100 transition"
      >
        <span className="mr-2 text-lg">←</span>
        <span className="font-medium">Back</span>
      </button>
      {currentProduct.map((product, key) => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src={product.img}
              alt={product.product_name}
              className="w-full max-w-md object-contain"
            />
          </div>
          {isEditingAddress ? (
            <>
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block font-semibold">First Name *</label>
                    <input
                      required
                      type="text"
                      value={orderInfo.f_name}
                      name="f_name"
                      placeholder="First Name"
                      onChange={handleInputChange}
                      className="border rounded-md p-2 w-full"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold">Last Name *</label>
                    <input
                      required
                      type="text"
                      value={orderInfo.l_name}
                      name="l_name"
                      placeholder="Last Name"
                      onChange={handleInputChange}
                      className="border rounded-md p-2 w-full"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold">Address *</label>
                    <input
                      required
                      type="text"
                      name="street"
                      value={orderInfo.street}
                      placeholder="Number and Street Address"
                      onChange={handleInputChange}
                      className="border rounded-md p-2 w-full"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold">City *</label>
                    <input
                      required
                      type="text"
                      name="city"
                      value={orderInfo.city}
                      onChange={handleInputChange}
                      className="border rounded-md p-2 w-full"
                    />
                  </div>
                  <div class="flex items-center space-x-4">
                    <div className="flex-grow">
                      <label class="block font-semibold">Ward *</label>
                      <input
                        required
                        type="text"
                        name="ward"
                        value={orderInfo.ward}
                        onChange={handleInputChange}
                        id="ward"
                        class="border rounded-md p-2 w-full"
                      />
                    </div>

                    <div className="flex-grow">
                      <label class="block font-semibold">District *</label>
                      <input
                        required
                        type="text"
                        name="district"
                        value={orderInfo.district}
                        onChange={handleInputChange}
                        id="district"
                        class="border rounded-md p-2 w-full"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div>
              <h1 className="text-3xl font-bold">{product.product_name}</h1>
              <p className="mt-2 text-gray-600">
                Size: US{" "}
                <span className="font-semibold">{product.selectedSize}</span>
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center border rounded-lg p-4">
                  <div>
                    <p className="text-sm font-semibold">Price</p>
                    <p className="text-gray-600 text-sm">
                      Ships to Kickspirit first for Verification
                    </p>
                  </div>
                  <p className="text-main-color font-bold text-lg">
                    ${product.sellingPrice}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Make An Offer</p>
                  <button className="text-gray-600">➝</button>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <p className="text-gray-600">Standard Shipping</p>
                  <p className="text-gray-600">$10.00</p>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <p className="text-gray-700">
                    {savedAddress
                      ? `${savedAddress.street}, ${savedAddress.ward}, ${savedAddress.district}, ${savedAddress.city}`
                      : "Please enter your address"}
                  </p>
                  <button
                    onClick={handleEditAddressClick}
                    className="text-main-color"
                  >
                    EDIT
                  </button>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <p className="text-gray-600">Discount Code</p>
                  <button className="text-main-color">ADD</button>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <p className="text-gray-600">Visa ending in 8818</p>
                  <button className="text-main-color">EDIT</button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="mt-8 border-t pt-4">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">
            Subtotal{" "}
            <span className="text-main-color">${subtotal.toFixed(2)}</span>
          </p>
        </div>
        <div className="mt-8">
          {isEditingAddress ? (
            <div class="flex items-center space-x-4">
              <button
                onClick={handleSaveInfoClick}
                className="flex-grow bg-main-color text-white rounded-md py-2"
              >
                Save
              </button>

              <button
                onClick={() => {
                  setIsEditingAddress(false);
                }}
                className="flex-[0.5] bg-white text-black rounded-md border border-black py-2 px-4"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => console.log("Review Product")}
              className="w-full bg-main-color text-white rounded-md py-2"
            >
              Review Product
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductOrder);
