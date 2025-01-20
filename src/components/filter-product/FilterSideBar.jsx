import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { CategoryRequest } from "../../caller/api-requestor";
import { categoryState } from "../../recoil/atoms/categoryAtoms";

const FilterSidebar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onPriceChange,
}) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPriceRange([0, value]);
    onPriceChange([0, value]);
  };

  // const handlePriceInputChange = (e, type) => {
  //   const value = Math.max(
  //     0,
  //     Math.min(5500, parseInt(e.target.value, 10) || 0)
  //   );
  //   const newRange =
  //     type === "min" ? [value, priceRange[1]] : [priceRange[0], value];
  //   setPriceRange(newRange);
  //   onFilterChange({ category: selectedCategory, priceRange: newRange });
  // };

  // const handlePriceChange = (e) => {
  //   const value = Math.max(
  //     0,
  //     Math.min(5500, parseInt(e.target.value, 10) || 0)
  //   );
  //   setPriceRange([0, value]);
  //   onFilterChange({ priceRange: [0, value] });
  // };
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       // Fetch categories từ API dựa trên brandName
  //       const response = await CategoryRequest.getCategoryByBrand(brandName);
  //       setCategories(response); // Cập nhật danh sách category
  //     } catch (error) {
  //       console.error("Error fetching categories:", error);
  //     }
  //   };

  //   if (brandName) {
  //     fetchCategories();
  //   }
  // }, [brandName]);
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="font-bold text-lg mb-4">CATEGORY</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onCategoryChange("")}
              className={`block w-full text-left py-1 ${
                selectedCategory === ""
                  ? "font-bold text-blue-600"
                  : "text-gray-700"
              }`}
            >
              All Products
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onCategoryChange(category)}
                className={`block w-full text-left py-1 ${
                  selectedCategory === category
                    ? "font-bold text-blue-600"
                    : "text-gray-700"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-bold text-lg mb-4">PRICE</h3>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
