import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import FilterSidebar from "../components/filter-product/FilterSideBar";
import { ListProduct } from "../components";
import { productState } from "../recoil/atoms/productAtoms";
import { ProductRequest } from "../caller/api-requestor";
import { categoryState } from "../recoil/atoms/categoryAtoms";

const BrandProductPage = () => {
  const { brandName } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useRecoilState(productState);

  const handleFilterChange = (filters) => {
    console.log("Filters:", filters);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await ProductRequest.getAllProducts();
        const filteredProducts = allProducts.filter(
          (product) =>
            product.brand_name.toLowerCase() === brandName.toLowerCase()
        );

        setProducts(filteredProducts);
        setFilteredProducts(filteredProducts);

        const uniqueCategories = [
          ...new Set(filteredProducts.map((product) => product.category_name)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [brandName, setProducts]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    let updatedProducts = products;

    if (category !== "") {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.category_name &&
          product.category_name.toLowerCase() === category.toLowerCase()
      );
    }

    if (priceRange[1] > 0) {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.retail_price &&
          product.retail_price >= priceRange[0] &&
          product.retail_price <= priceRange[1]
      );
    }

    setFilteredProducts(updatedProducts);
  };
  const handlePriceChange = (range) => {
    setPriceRange(range);

    let updatedProducts = products;

    if (range[1] > 0) {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.retail_price &&
          product.retail_price >= range[0] &&
          product.retail_price <= range[1]
      );
    }

    if (selectedCategory !== "") {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.category_name &&
          product.category_name.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredProducts(updatedProducts);
  };
  return (
    <div className="container mx-auto min-h-screen flex">
      <aside className="w-1/4 p-6 bg-white sticky top-0 min-h-screen">
        <FilterSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onPriceChange={handlePriceChange}
        />
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">{brandName}</h1>
        <div>
          {filteredProducts.length > 0 ? (
            <ListProduct
              title={selectedCategory || "All Products"}
              product={filteredProducts}
            />
          ) : (
            <p className="text-gray-500 text-center mt-6">
              No products match your filter criteria.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default React.memo(BrandProductPage);
