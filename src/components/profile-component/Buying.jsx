import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buyingProductState } from "../../recoil/atoms/productAtoms";
import { useRecoilState } from "recoil";
import { ProductRequest } from "../../caller/api-requestor";

const Buying = () => {
  const [productData, setProducts] = useRecoilState(buyingProductState);
  const currentUserID = JSON.parse(localStorage.getItem("user")).user_id;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductRequest.getBuyingProductById(
          currentUserID
        );
        setProducts(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUserID, setProducts]);

  const handleDelete = (buyingId) => {
    console.log("Deleting item with ID:", buyingId);
  };
  useEffect(() => {
    console.log("productData", productData);
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-start space-x-8 border-b-2 pb-2"></div>
      {productData.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-gray-500 text-lg mb-4">
            You don’t have any pending orders. Items that are being shipped to
            you will show up here.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Browse
          </button>
        </div>
      ) : (
        <table className="w-full text-sm text-left text-gray-500 border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3">
                Image
              </th>
              <th scope="col" className="px-4 py-4">
                Product Name
              </th>
              <th scope="col" className="px-4 py-3">
                Category
              </th>
              <th scope="col" className="px-4 py-3">
                Brand
              </th>
              <th scope="col" className="px-4 py-3">
                Buying Date
              </th>
              <th scope="col" className="px-4 py-3">
                Status
              </th>
              <th scope="col" className="px-4 py-3">
                Total
              </th>
              <th scope="col" className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product, key) => (
              <tr className="border-b" key={key}>
                <td className="h-14 w-20">
                  <img
                    src={product.img}
                    alt={product.product_name}
                    className="h-full w-full rounded-md object-contain"
                  />
                </td>
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                >
                  {product.product_name}
                </th>
                <td className="px-4 py-3">{product.category_name}</td>
                <td className="px-4 py-3">{product.brand_name}</td>
                <td className="px-4 py-3">
                  {new Date(product.buying_date).toLocaleDateString()}
                </td>
                <td className="px-4 uppercase py-3">{product.buying_status}</td>
                <td className="px-4 py-3">${product.total}</td>
                <td>
                  <button
                    onClick={() => handleDelete(product.buying_id)}
                    className="hover:text-red-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default React.memo(Buying);
