import React, { useEffect, useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productState } from "../../../recoil/atoms/productAtoms";
import ProductRequest from "../../../caller/api-requestor/ProductRequest";
// import AddNewModal from "../Modal/NewProductModal";
// import ActionModal from "../Modal/ActionModal";
import { AddNewProductModal, ActionModal, UpdateProductModal } from "../Modal";

const ProductsTables = () => {
  const [productData, setProducts] = useRecoilState(productState);
  const [showAddModal, setShowAddModal] = useState(false);

  const [showDeleteModal, setDeleteModal] = useState(false);
  const [showUpdateProductModal, setShowUpdateProductModal] = useState(false);

  const [deleteProductID, setDeleteProductId] = useState("");

  const toggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  const toggleDeleteModal = (id) => {
    setDeleteProductId(id);
    setDeleteModal(!showDeleteModal);
  };

  const toggleUpdateProductModal = () => {
    setShowUpdateProductModal(!showUpdateProductModal);
  };
  const handleDeleteData = async () => {
    try {
      await ProductRequest.deleteProduct(deleteProductID);
      setProducts((pre) => {
        const newProduct = [...pre];
        return newProduct.filter(
          (items) => items.product_id != deleteProductID
        );
      });
    } catch (err) {
      console.error("Error from Usertabel: ", err);
    }
  };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRes = await ProductRequest.getAllProducts();
        setProducts(productRes);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="relative z-10 w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button
                  type="button"
                  id="createProductModalButton"
                  onClick={toggleAddModal}
                  className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  Add product
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-4 py-4">
                      Product name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Brand
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {productData.map((product, key) => (
                    <tr className="border-b">
                      <td className="h-14 w-20 rounded-md">
                        <img src={product.img} />
                      </td>
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {product.product_name}
                      </th>
                      <td className="px-4 py-3">{product.category_name}</td>
                      <td className="px-4 py-3">{product.brand_name}</td>
                      <td className="px-4 py-3">{product.retail_price}</td>
                      <td className="px-4 py-3 flex items-center justify-end">
                        <ActionModal
                          showPreviewModal={toggleUpdateProductModal}
                          EditModal={UpdateProductModal}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {showAddModal && (
          <AddNewProductModal
            isOpen={toggleAddModal}
            onClose={toggleAddModal}
          />
        )}
      </section>
      {/* 
      <div
        id="readProductModal"
        tabindex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-xl max-h-full">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <div className="flex justify-between mb-4 rounded-t sm:mb-5">
              <div className="text-lg text-gray-900 md:text-xl dark:text-white">
                <h3 className="font-semibold ">Apple iMac 27”</h3>
                <p className="font-bold">$2999</p>
              </div>
              <div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="readProductModal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Details
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
                processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
                Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Category
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                Electronics/PC
              </dd>
            </dl>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default React.memo(ProductsTables);
