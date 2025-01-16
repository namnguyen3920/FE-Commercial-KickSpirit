import React, { useEffect, useState } from "react";
import ModalLayout from "./ModalLayout";
import {
  ProductRequest,
  BrandRequest,
  CategoryRequest,
} from "../../../caller/api-requestor";

function AddNewProductModal({ isOpen, onClose }) {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [images, setImg] = useState();
  const [formData, setFormData] = useState({
    product_name: "",
    retail_price: "",
    description: "",
    category_id: "",
    brand_id: "",
    img: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ProductRequest.addNewProduct(formData);
    } catch (err) {
      console.error("Error adding product:", err);
    }
    window.location.href = window.location.href;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveImage = () => {
    setImg(null);
    setFormData((prev) => ({
      ...prev,
      img: null,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg({
        file,
        preview: URL.createObjectURL(file),
      });
      setFormData((prev) => ({
        ...prev,
        img: file,
      }));
    }
  };

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const brandResponse = await BrandRequest.getBrandName();
        const categoryResponse = await CategoryRequest.getCategoryName();
        setBrands(brandResponse);
        setCategories(categoryResponse);
      } catch (error) {
        console.error("Error fetching brands or categories:", error);
      }
    };

    fetchOptions();
  }, []);

  useEffect(() => {
    console.log("brands", brands);
  });

  return (
    <>
      <ModalLayout title="New Product" isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit}>
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Upload Image
                </label>
                <div className="flex flex-wrap gap-4">
                  {images ? (
                    <div className="relative w-32 h-32 border border-gray-300 rounded-md overflow-hidden">
                      <img
                        src={images.preview}
                        alt="preview"
                        className="object-cover w-full h-full"
                      />
                      <button
                        onClick={handleRemoveImage}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center w-32 h-32 border border-dashed border-gray-300 rounded-md cursor-pointer"
                    >
                      <svg
                        className="w-8 h-8 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">Upload</span>
                      <input
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  )}
                </div>
              </div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Product Name
              </label>
              <input
                type="text"
                name="product_name"
                value={formData.product_name}
                onChange={handleInputChange}
                id="product_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type product name"
                required
              />
            </div>
            <div>
              <label
                for="brand"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Brand
              </label>
              <select
                name="brand_id"
                value={formData.brand_id}
                onChange={handleInputChange}
                className="block w-full p-2.5 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select brand</option>
                {brands.map((brand) => (
                  <option key={brand.brand_id} value={brand.brand_id}>
                    {brand.brand_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                for="price"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Price
              </label>
              <input
                type="number"
                name="retail_price"
                value={formData.retail_price}
                onChange={handleInputChange}
                id="retail_price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="$2999"
                required=""
              />
            </div>
            <div>
              <label
                for="category"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Category
              </label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleInputChange}
                className="block w-full p-2.5 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option
                    key={category.category_id}
                    value={category.category_id}
                  >
                    {category.category_name}
                  </option>
                ))}
              </select>
            </div>
            <div class="sm:col-span-2">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write product description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              class="mr-1 -ml-1 w-6 h-6"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            Add new product
          </button>
        </form>
      </ModalLayout>
    </>
    // <div class="fixed p-4 w-full max-w-2xl max-h-full">
    //   <div className="z-50 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    //     <div className="bg-white p-6 rounded shadow-lg w-96">
    //
    //     </div>
    //   </div>
    // </div>
  );
}

export default AddNewProductModal;
