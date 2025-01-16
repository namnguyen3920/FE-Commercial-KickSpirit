import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilterSidebar from "../components/filter-product/FilterSideBar";
const categories = ["Apparel", "Accessories", "Sneakers", "Shoes"];
const BrandProductPage = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);

  const handleFilterChange = (filters) => {
    console.log("Filters:", filters);
  };

  useEffect(() => {
    // Giả lập API call để lấy sản phẩm dựa trên thương hiệu
    const fetchProducts = async () => {
      // Replace this with an actual API call
      const productList = [
        {
          id: 1,
          name: `${brandName} Product 1`,
          price: 100,
          img: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: `${brandName} Product 2`,
          price: 200,
          img: "https://via.placeholder.com/150",
        },
      ];
      setProducts(productList);
    };

    fetchProducts();
  }, [brandName]);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 p-6 bg-white sticky top-0">
        <FilterSidebar
          categories={categories}
          onFilterChange={handleFilterChange}
        />
      </aside>

      {/* Product List */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">{brandName}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-md shadow-md flex flex-col"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="text-gray-800 font-medium">{product.name}</h3>
                <p className="text-black text-lg font-bold mt-2">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default React.memo(BrandProductPage);
